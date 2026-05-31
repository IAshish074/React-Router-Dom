import {useNavigate} from 'react-router-dom'


function Home(){
const navigate = useNavigate()
    return(
        <>
     
        <h1>Home Page</h1>
        <button onClick={()=>navigate("/about")}>Go to About Page</button>
        <button onClick={()=>navigate("/contact")}>Go to Contact Page</button>
        </>
    )
}


export default Home