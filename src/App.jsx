import './App.css';
import { useState } from "react"
import Game from "./Components/Game"
import Result from './Components/Result';
import { questions } from "./Components/Questions"

function App() {
  const [step, setStep] = useState(0)
  const question = questions[step]
  const [correct, setCorrect] = useState(0)

  const onClickVariant = (index) => {
    setStep(step + 1)
    if (index === question.correct) {
      setCorrect(correct + 1)
    }
  }

  return (
    <div className="App">
      {
        step !== questions.length ? 
          <Game 
            questions={questions} 
            question={question} 
          onClickVariant={onClickVariant} 
            step={step}
          /> 
      : 
        <Result 
            questions={questions} 
            correct={correct}
        />
        }  
    </div>
  );
}

export default App;