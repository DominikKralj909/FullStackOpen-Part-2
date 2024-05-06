export const PersonForm = ({ onNameSubmit, newName, onNameChange, newNumber, onNumberChange }) => {
    return(
        <form onSubmit={onNameSubmit}>
				<div>
					<div>
						name: <input type="text" value={newName} onChange={onNameChange} />
					</div>
					<div>
						number: <input type="text" value={newNumber} onChange={onNumberChange} />
					</div>
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
    )
}