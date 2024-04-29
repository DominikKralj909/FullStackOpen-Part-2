import StatisticLine from "./StatisticLine";

function Statistics({ statistics }) {
    const { good, neutral, bad } = statistics

    const sum = good + neutral + bad;
    const avg = (good - bad) / sum || 0;
    const goodPerc = ((good / sum || 0) * 100).toFixed(2);

    const hasFeedback = good > 0 || neutral > 0 || bad > 0;

    return (
        <>
            {
                hasFeedback ? (
                    <>
                        <h2>statistics</h2>
                        <StatisticLine text="good" value={good}/>
                        <StatisticLine text="neutral" value={neutral}/>
                        <StatisticLine text="bad" value={bad}/>
                        <StatisticLine text="sum" value={sum}/>
                        <StatisticLine text="average" value={avg}/>
                        <StatisticLine text="positive" value={goodPerc}/>
                    </>
                ) : 'No feedback given'
            }
        </>
    );
}

export default Statistics