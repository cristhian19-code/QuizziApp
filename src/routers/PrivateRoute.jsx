import { useSelector } from "react-redux"
import { Navigate, Route, Routes } from "react-router-dom"
import { QuestionsScreen } from "../components/questions/QuestionsScreen"
import { ResultScreen } from "../components/result/ResultScreen"

export const PrivateRoute = () => {
  const { playGame } = useSelector(state => state.game)

  return (
    playGame ? (
      <Routes>
        <Route path="questions" element={<QuestionsScreen/>} />
        <Route path="result" element={<ResultScreen/>} />
      </Routes>
    ) : <Navigate to="/" />
  )
}
