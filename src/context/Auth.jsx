import { createContext, useContext, useState,useEffect } from "react"

const Auth =  createContext()
const initialState = {isAuth:false,user:{}}


const AuthContext = ({children}) => {
  const [state,setState] = useState(initialState)
    const [isAppLoading,setIsAppLoading] = useState(true)

const  readProfile =()=>{
    const user ={uid:"123",email:"mabbdullah@gmail.com",name:"Abdullah"}
    setState ({isAuth:true,user})
      setTimeout(() => {
    setIsAppLoading(false)
   }, 2000);
}
 useEffect (()=>{readProfile()},
 
 [])

 const handleLogout =()=>{
    setState(initialState)
 }



  return (
    //<Auth.Provider value={{isAuth:state.isAuth,user:state.user, isAppLoading}}>
    <Auth.Provider value={{...state,isAppLoading,handleLogout}}>
{children}
    </Auth.Provider>
  )
}
export const useAuth =()=>useContext(Auth)
export default AuthContext