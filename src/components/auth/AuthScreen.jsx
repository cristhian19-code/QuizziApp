import { useState } from "react"
import { Login } from "./Login"
import { Register } from "./Register"

export const AuthScreen = () => {
    const [changePage, setChangePage] = useState(false)

    return (
        <div>
            {
                !changePage
                    ? (<Login setChangePage={setChangePage} />)
                    : (<Register setChangePage={setChangePage} />)}
        </div>
    )
}
