function Feedback({ updateFeedback }) {
    const onFeedbackUpdate = (feedback) => updateFeedback(feedback);

    return (
        <div>
            <h2>give feedback</h2>
            <button onClick={() => onFeedbackUpdate('good')}>Good</button>
            <button onClick={() => onFeedbackUpdate('neutral')}>Neutral</button>
            <button onClick={() => onFeedbackUpdate('bad')}>Bad</button>
        </div>
    );
}

export default Feedback;