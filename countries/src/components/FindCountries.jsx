import { useEffect, useState } from "react";
import { getAllCountries } from "../services/countries";
import axios from 'axios';

const API_KEY = "cc5c3cd65983352e6649d2b21c64a651";

function FindCountries({ onCountrySearch, country }) {
    const [countries, setCountries] = useState([]);
    const [expandedCountries, setExpandedCountries] = useState([]);

    useEffect(() => {
        getAllCountries().then((response) => {
            const allCountries = response.data.map(country => country);
            setCountries(allCountries);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    const countryNames = countries?.map(c => c.name.common);
    const filteredCountries = countryNames?.filter(c => c.toLowerCase().includes(country.toLowerCase()));

    const toggleExpanded = (countryName) => {
        if (expandedCountries.includes(countryName)) {
            setExpandedCountries(prevState => prevState.filter(name => name !== countryName));
        } else {
            setExpandedCountries(prevState => [...prevState, countryName]);
        }
    };

    const fetchWeather = async (country) => {
        try {
            const countryData = countries.find(c => c.name.common.toLowerCase() === country.toLowerCase());
            const lat = countryData.latlng[0];
            const lon = countryData.latlng[1];

            const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching weather data:", error);
            return null;
        }
    };

    const renderCountries = () => {
        if (!country) return null;

        if (filteredCountries?.length >= 10) return <div>Too many matches, specify another filter.</div>;

        return filteredCountries?.map(c => {
            const countryData = countries.find(country => country.name.common.toLowerCase() === c.toLowerCase());
            const isExpanded = expandedCountries.includes(c);

            return (
                <div key={c}>
                    <div className="country">{c}</div>
                    {isExpanded && (
                        <div>
                            <p>Capital: {countryData.capital[0]}</p>
                            <p>Languages: {Object.values(countryData.languages).join(', ')}</p>
                            <p>Area: {countryData.area} km²</p>
                            <img src={countryData.flags.svg} alt={countryData.flags.alt} style={{ width: '100px' }} />
                            <WeatherInfo country={c} />
                        </div>
                    )}
                    <button onClick={() => toggleExpanded(c)}>{isExpanded ? 'Hide' : 'Show'}</button>
                </div>
            );
        });
    };

    const WeatherInfo = ({ country }) => {
        const [weatherData, setWeatherData] = useState(null);

        useEffect(() => {
            fetchWeather(country).then(data => {
                setWeatherData(data);
            });
        }, [country]);

        if (!weatherData) return null;

        const temperature = weatherData.current.temp;
        const windSpeed = weatherData.current.wind_speed;

        return (
            <div>
                <p>Temperature: {temperature}°C</p>
                <p>Wind Speed: {windSpeed} m/s</p>
            </div>
        );
    };

    return (
        <>
            <input
                type="search"
                placeholder="Search for a country..."
                value={country}
                onChange={onCountrySearch}
            />
            {renderCountries()}
        </>
    );
}

export default FindCountries;
