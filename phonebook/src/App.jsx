import { useState } from 'react'

import { Filter } from './components/Filter';
import { PersonForm } from './components/PersonForm';
import { Persons } from './components/Persons';

const App = () => {
	const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '4515151' }]);
	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');
	const [searchedName, setSearchedName] = useState('');

	const handleNameChange = (event) => setNewName(event.target.value);
	const handleNumberChange = (event) => setNewNumber(event.target.value);
	const handleNameSearch = (event) => setSearchedName(event.target.value)

	const handleNameSubmit = (event) => {
		event.preventDefault();

		if (newName.trim() === '' || newNumber.trim() === '') {
			alert(`Please enter both name and number`);
			return
		}

		if (persons.map(({ name }) => name).includes(newName)) {
			alert(`${newName} is already added to phonebook`);
			return;
		}

		setPersons((prevPersons) => [...prevPersons, { name: newName, number: newNumber }]);
		setNewName('');
		setNewNumber('');
	}

	const filteredPersons = persons.filter(({ name }) =>name.toLowerCase().includes(searchedName.toLowerCase()));

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter searchedName={searchedName} onNameSearch={handleNameSearch}/>
			<h3>Add a new person</h3>
			<PersonForm
				newName={newName}
				newNumber={newNumber}
				onNameSubmit={handleNameSubmit}
				onNameChange={handleNameChange}
				onNumberChange={handleNumberChange}
			/>
			<h2>Numbers</h2>
			<Persons filteredPersons={filteredPersons} />
		</div>
	)
}

export default App