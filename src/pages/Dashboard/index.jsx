import { Routes,Route } from "react-router-dom"
import Home from "./Home"
import NoPage from "../../components/Misc/NoPage"
import About from "./About"
import Contact from "./Contact"
import Todos from "./Todos"
const Dashboard = () => {
  return (
    <>
  
    <Routes>
 <Route path="/" element={<Home/>}/>
  <Route path="about" element={<About/>}/>
   <Route path="contact" element={<Contact/>}/>
   <Route path="todos/*" element={<Todos/>}/>
<Route path="*" element={<NoPage/>}/>
    </Routes>
 
    </>
  )
}

export default Dashboard