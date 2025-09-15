import { useContext } from "react"
import { UserContext } from "../userContext/UserContext"
import { Navigate, Outlet } from "react-router-dom"
import Home from "../components/home/Home"
function ProtectedRoutes(){

    const {isLogin} = useContext(UserContext)



    if(!isLogin){
        return <Navigate to= '/login' />
    }

    return <Outlet/>
}

export default ProtectedRoutes