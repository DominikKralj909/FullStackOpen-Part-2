import axios from 'axios';

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api';

const getAllCountries = () => axios.get(`${baseUrl}/all`);

export { getAllCountries };