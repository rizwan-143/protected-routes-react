import { useNavigate } from "react-router-dom"

function About(){
    const navigate = useNavigate()
    return (
        <>
        <div className="flex flex-col gap-4 items-center p-5  ">
        <button className="bg-green-400 p-2 rounded-lg 
         uppercase text-white"
        onClick={() =>  navigate('/home')} >back to home</button>
        <h3 className="uppercase font-bold text-[30px]">about page</h3>
        </div>

        
        </>
    )
}

export default About