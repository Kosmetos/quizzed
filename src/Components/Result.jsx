export default function Result({ correct, questions }) {
  return (
    <div className="result">
      <img alt='conratz' src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Верно {correct} из {questions.length}</h2>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}