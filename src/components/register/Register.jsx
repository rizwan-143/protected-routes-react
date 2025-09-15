import { useContext, useEffect } from "react"
import { UserContext } from "../../userContext/UserContext"
import { Navigate, NavLink, useNavigate } from "react-router-dom"
function Register(){
    const {setRegisteredUsers , message , setMessage} = useContext(UserContext)

    const navigate = useNavigate()

    // here to handle form and get data 
    function handleForm(e ){
            e.preventDefault()

            const userRegistration = {
                registername : e.target.registername.value,
                registeremail : e.target.registeremail.value,
                registerpassword : e.target.registerpassword.value
            }

            setRegisteredUsers(prev => {
               const updatedUser =  [...prev , userRegistration]
                localStorage.setItem('registeredUsers' , JSON.stringify(updatedUser))
                return updatedUser
            })

            e.target.reset()
            setMessage('user registered successully ! ')
    }

    useEffect(() => {
        if(message){
            const setTime = setTimeout(() => {
                setMessage("") 
                navigate('/login')
            } , 1000)
        return () => clearTimeout(setTime)
        }
    }, [message])

    return(
        <>
        <div className="grid sm:grid-cols-1 md:grid-cols-2">
        <div className="sm:h-svh md:h-screen bg-black text-white flex items-center justify-center">
            <h1 className="font-extrabold uppercase text-[30px]">register</h1>
        </div>
        <div className="">
            <form onSubmit={handleForm}
             action="" 
            className="w-full h-screen  p-3 bg-gray-100
             flex flex-col justify-center gap-5">
                <div className="col flex flex-col gap-2 items-start justify-center">
                    <label htmlFor="">name</label>
                    <input  className="border border-gray-300 bg-gray-100 w-full p-2 rounded-full"
                    type="text" placeholder="name" name="registername" id="" />
                </div>
                <div className="col flex flex-col gap-2 items-start justify-center">
                    <label htmlFor="">email</label>
                    <input  className="border border-gray-300 bg-gray-100 w-full p-2 rounded-full"
                    type="email" placeholder="email" name="registeremail" id="" />
                </div>
                <div className="col flex flex-col gap-2 items-start justify-center">
                    <label htmlFor="">password</label>
                    <input  className="border border-gray-300 bg-gray-100 w-full p-2 rounded-full"
                    type="password" placeholder="password" name="registerpassword" id="" />
                </div>
                <div className="col flex  gap-2 items-center justify-start">
                <button className="bg-green-400 px-4 py-1 rounded-full text-white uppercase" >register</button>
                <NavLink to ="/login" className={'text-blue-600 underline'} >have account ?</NavLink>
                </div>
            </form>
        </div>
        {
            message && <div className="bg-green-400 px-4 py-1 font-bold  rounded-lg
                                          fixed top-12 right-3">{message}</div>
        }
        </div>
        </>
    )
}

export default Register