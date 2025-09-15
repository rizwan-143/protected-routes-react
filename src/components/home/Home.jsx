import { useState } from "react"
import { NavLink } from "react-router-dom"
function Home() {
    const [mobileView , SetMobileView] = useState(true)
    const loginUser = JSON.parse(localStorage.getItem('loginUser')) || null
    function logoutUser(){
        localStorage.removeItem('loginUser')
    }

    return (
        <>

        <header className="flex justify-between capitalize
          items-center px-2 bg-gray-100 p-2">

            {/* here goes humberger */}
            <button className="lg:hidden order-1"  onClick={() => SetMobileView(!mobileView) } >
                <i class="fa-solid fa-bars"></i>
            </button>

            {/* here goes logo */}
            <h1>my app</h1>

            {/* here goes menu */}
            <nav>
                <ul className={`flex flex-col  gap-4 absolute left-0  top-0
                                lg:static lg:flex-row lg:h-auto lg:bg-transparent lg:translate-x-0 ${mobileView ? '-translate-x-full  ' : 'translate-x-0 h-screen bg-gray-200 p-5 rounded-md'} `}>
                    <li><NavLink to= '/products' >products</NavLink></li>
                    <li><NavLink to= '/about' >about</NavLink></li>
                    <li><NavLink to= '/contact' >contact</NavLink></li>
                </ul>
            </nav>

            {/* here goes logout btn */}
            <div className="">
                <button className="bg-gray-400 p-1 rounded-lg capitalize font-bold"
                 onClick={() => {logoutUser() ; window.location.reload() }} >logout</button>
            </div>

        </header>


            {/* hero section */}

            <div className="">
               <h1 className="text-center font-bold uppercase mt-5">{`"${loginUser.registername}" welcome to home page`}</h1>
            </div>


        </>
    )
}

export default Home