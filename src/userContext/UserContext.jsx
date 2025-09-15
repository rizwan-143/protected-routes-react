import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "../components/home/Home";

export const UserContext = createContext()

export const ContextProvider = ({ children }) => {

    const navigate = useNavigate()

    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || []

    const [registerUsers, setRegisteredUsers] = useState(registeredUsers)
    const [loginUser, setLoginUser] = useState(null)
    const [isLogin , setIsLogin] = useState(!!localStorage.getItem('loginUser'));
    const [message , setMessage] = useState('')




    function handleLoginForm(e) {

        e.preventDefault()

        const userLogin = {

            loginemail: e.target.loginemail.value,
            loginpassword: e.target.loginpassword.value

        }


        const foundUser = registerUsers.find((register) => register.registeremail === userLogin.loginemail && register.registerpassword === userLogin.loginpassword)

        if (foundUser) {
            localStorage.setItem("loginUser", JSON.stringify(foundUser))
            setLoginUser(foundUser)
            setMessage('user login successfully !')
            
        }else{
            alert('invalid credentials')
        }
    }
    
    
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
        setIsLogin(true)
      navigate("/home");
      setMessage("");
    }, 2000);

    return () => clearTimeout(timer);
  }
}, [message]);



    return (
        <UserContext.Provider value={{  message , setMessage ,
            setRegisteredUsers, setLoginUser, handleLoginForm , isLogin  , loginUser  }}>
            {children}
        </UserContext.Provider>
    )

}