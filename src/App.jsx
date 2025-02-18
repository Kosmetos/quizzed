import './App.css';
import { useState } from "react"
import Game from "./Components/Game"
import Result from './Components/Result';
import { questions } from "./Components/Questions"
import StartingPage from "./Components/Starting"

function App() {
  const [started, setStarted] = useState(false)
  const [step, setStep] = useState(0)
  const question = questions[step]
  const [correct, setCorrect] = useState(0)

  const startHandler = () => {
    setStarted(true)
  }

  const onClickVariant = (index) => {
    setStep(step + 1)
    if (index === question.correct) {
      setCorrect(correct + 1)
    }
  }

  return (
    <div className="App">
      {!started ? <StartingPage startHandler={startHandler}/> : <Game />}
      {/* {
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
        }   */}
    </div>
  );
}

export default App;