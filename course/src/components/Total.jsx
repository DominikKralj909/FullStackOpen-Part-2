function Total({ parts }) {
    let totalExercises = 0;
    parts.forEach(({ exercises }) => totalExercises += exercises);

    return <p><strong>total of {totalExercises} exercises</strong></p>;
}

export default Total;