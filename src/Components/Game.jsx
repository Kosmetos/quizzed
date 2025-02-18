export default function Game({ questions, question, onClickVariant, step }) {

  const percentage = Math.round(step / questions.length * 100)
  console.log(percentage)

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((item, index) => 
            <li 
              key={index} 
              onClick={() => onClickVariant(index)}
            >
              {item}
            </li>
          )
        }
      </ul>
    </>
  );
}
