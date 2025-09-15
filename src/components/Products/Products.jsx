import { useNavigate } from "react-router-dom"

function Products(){
    const navigate = useNavigate()
    return (
        <>
        <div className="flex flex-col items-center gap-5 p-5 ">
        <button onClick={() => navigate('/home')}
        className="bg-green-400 uppercase p-2 rounded-lg  " >back to home</button>
        <h3 className="font-bold uppercase text-[30px]">products page</h3>
        </div>
        </>
    )
}

export default Products