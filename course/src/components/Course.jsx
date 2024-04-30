import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

function Course({ course }) {
    const { name, parts } = course;

    let totalExercises = 0;
	parts.forEach(part => totalExercises += part.exercises);

    return(
        <>
            <Header name={name} />
            <Content parts={parts} />
            <Total parts={parts} />
        </>
    );
}

export default Course