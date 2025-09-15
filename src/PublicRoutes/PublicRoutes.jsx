import { useContext } from "react"
import { UserContext } from "../userContext/UserContext"
import { Navigate, Outlet } from "react-router-dom"
function PublicRoutes(){
    const {isLogin} = useContext(UserContext)
    
    if(isLogin){
      return   <Navigate to= '/home' />
    }

    return <Outlet/>


}

export default PublicRoutes