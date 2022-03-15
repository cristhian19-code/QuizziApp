import { useSelector } from "react-redux"
import { Navigate, Route, Routes } from "react-router-dom"
import { HomeScreen } from "../components/home/HomeScreen"
import { QuestionsScreen } from "../components/questions/QuestionsScreen"
import { ResultScreen } from "../components/result/ResultScreen"

export const PrivateRoute = () => {
  const { user } = useSelector(state => state.auth)

  return (
    user ? (
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path="questions" element={<QuestionsScreen/>} />
        <Route path="result" element={<ResultScreen/>} />
      </Routes>
    ) : <Navigate to="/auth" />
  )
}
