import Part from "./Part";

function Content({ parts }) {
	return (
		parts.map((part) => (<Part content={part.name} exercises={part.exercises} key={part.name} />))
	);
}

export default Content