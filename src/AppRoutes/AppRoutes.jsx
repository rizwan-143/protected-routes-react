import { Route, Routes } from "react-router-dom"
import Register from "../components/register/Register"
import ProtectedRoutes from "../ProtectedRoutes/ProtectedRoutes"
import Login from "../components/login/Login"
import Home from "../components/home/Home"
import PublicRoutes from "../PublicRoutes/PublicRoutes"
import Products from "../components/Products/Products"
import PageNotFound from "../components/PageNotFound/PageNotFound"
import About from "../components/About/About"

const AppRoutes = () =>{
    return(
        <>

        <Routes>
            <Route element ={<ProtectedRoutes/>} >
            <Route path="/home" element = {<Home/>} />
            <Route path="/about" element = {<About/>} />
            <Route path="/products" element = {<Products/>} />
            </Route>
            <Route element = {<PublicRoutes/>} >
            <Route path="/login" element = {<Login/>} />
            <Route path="/register" element = {<Register/>} />
            </Route>
            <Route path="*" element = {<PageNotFound/>} />
        </Routes>
        
        </>
    )
}

export default AppRoutes