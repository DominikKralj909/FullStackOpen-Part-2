export const Persons = ({ filteredPersons }) => {
    return filteredPersons.length === 0 ? 'No persons found' : filteredPersons.map(({ name, number }) => (<div key={name}>{name} - {number}</div>))
}