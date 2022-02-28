import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
    const { playGame } = useSelector(state => state.game)

    return (
        !playGame ? { ...children } : <Navigate to="/questions"/>
    )
}

