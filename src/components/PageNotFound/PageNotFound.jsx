import { useNavigate } from "react-router-dom"
function PageNotFound(){
    const navigate = useNavigate()
    return(
        <>

        <div className="flex flex-col gap-4 p-5 items-center">
            <h2 className="text-[20px] font-bold uppercase text-red-600">sorry page not found</h2>
            <p className="text-red-400 font-bold capitalize">404 - not found</p>
            <button onClick={() => navigate('/home')}
             className="bg-red-400 p-2 uppercase text-white font-bold rounded-lg">back to home</button>
        </div>
        
        </>
    )
}

export default PageNotFound