import { useContext } from "react"
import { UserContext } from "../../userContext/UserContext"
import { NavLink } from "react-router-dom";
function Login(){
    const {handleLoginForm , message} = useContext(UserContext);



    

    return(
        <>
        <div className="grid sm:grid-cols-1 md:grid-cols-2">
        <div className="sm:h-svh md:h-screen bg-black text-white flex items-center justify-center">
            <h1 className="font-extrabold uppercase text-[30px]">login</h1>
        </div>
        <div className="">
            <form onSubmit={handleLoginForm}
             action="" 
            className="w-full h-screen border border-gray-400 p-3 bg-gray-100
             flex flex-col justify-center gap-5">
                <div className="col flex flex-col gap-2 items-start justify-center">
                    <label htmlFor="">user name</label>
                    <input  className="border border-gray-300 bg-gray-100 w-full p-2 rounded-full"
                    type="email" placeholder="login email" name="loginemail" id="" />
                </div>
                <div className="col flex flex-col gap-2 items-start justify-center">
                    <label htmlFor="">user email</label>
                    <input  className="border border-gray-300 bg-gray-100 w-full p-2 rounded-full"
                    type="password" placeholder="loginpassword" name="loginpassword" id="" />
                </div>
                <div className="flex  gap-2 items-center justify-start">
                <button className="bg-green-400 px-4 py-1 rounded-full text-white uppercase" >login</button>
                <NavLink to ="/register" className={'text-blue-600 underline'} >not registered ?</NavLink>
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

export default Login