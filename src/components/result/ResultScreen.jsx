import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {useWindowSize} from 'react-use'
import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';

import { ResultItem } from "./ResultItem";
import { getResult } from "../../helpers/getResult";

import './index.css'
import Confetti from "react-confetti";
import { useDispatch } from "react-redux";
import { startCleanQuestions } from "../../actions/questions";
import { startCleanUI } from "../../actions/game";

export const ResultScreen = () => {
  const [result, setResult] = useState(null)
  const { questions } = useSelector(state => state.questions);
  const dispatch = useDispatch();

  const { width, height } = useWindowSize()

  useEffect(async () => {
    getResult(questions)
      .then(res => setResult(res))
  }, [])
  
  const handleExit = () => {
    dispatch(startCleanQuestions())
    dispatch(startCleanUI())
  }

  return (
    <>
      {
        result?.porcentage >= 50 && (<Confetti tweenDuration={2000} width={width} height={height} />)
      }
        
      <div className="relative flex justify-center py-14 flex-col items-center">
        <button onClick={handleExit} className="absolute text-white top-5 right-5 bg-purple-500 text-xl font-medium px-5 py-1 rounded-md">
          Salir
        </button>
        <CircularProgressbarWithChildren
          value={result?.porcentage}
          maxValue={100}
          styles={buildStyles({
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt',

            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: `rgba(62, 152, 199, ${90 / 100})`,
            trailColor: '#fffff',
            backgroundColor: '#58D68D',
          })}
        >
          <h1 className="text-2xl font-bold text-white">{result?.porcentage}%</h1>
          <p className="text-sm font-bold text-white">{`${result?.correct}/${result?.total}`}</p>
        </CircularProgressbarWithChildren>
        <div className="grid grid-cols-1 grid-rows-4  md:grid-cols-2 md:grid-rows-2 gap-9 mt-8">
          {
            questions.map((question, index) => (
              <ResultItem key={index} {...question} />
            ))
          }
        </div>
      </div>
    </>
  )
}
