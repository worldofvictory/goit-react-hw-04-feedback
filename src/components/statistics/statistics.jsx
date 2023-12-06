

 const Statistics = ({ good, bad, neutral, total, positivePercentage }) => {
    return (
        <ul>
            <li>Good: {good }</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {positivePercentage}</li>
        </ul>
    )
}

export default Statistics;