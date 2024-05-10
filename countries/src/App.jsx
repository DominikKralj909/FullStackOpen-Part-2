import { useState } from "react";

import FindCountries from "./components/FindCountries";


function App() {
	const [country, setCountry] = useState('');

	const handleCountrySearch = (event) => setCountry(event.target.value);

	return (
		<FindCountries onCountrySearch={handleCountrySearch} country={country}/>
	);
}

export default App
