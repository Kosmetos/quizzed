export default function StartingPage({ startHandler }) {

    return (
        <div className="result">
            <button onClick={startHandler()}>Начать тест</button>
        </div>
    ) 
}