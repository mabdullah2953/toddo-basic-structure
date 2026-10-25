import { createContext, useContext, useState,useEffect } from "react"


const Auth =  createContext()
const initialState = {isAuth:false,user:{}}


const AuthContext = ({children}) => {
  const [state,setState] = useState(initialState)
    const [isAppLoading,setIsAppLoading] = useState(true)

const  readProfile =()=>{
   const user = JSON.parse(localStorage.getItem("user"))
    if(user){
setState ({isAuth:true,user})

    }
          setTimeout(() => {
    setIsAppLoading(false)
   }, 2000);
}
 useEffect (()=>{readProfile()},
 
 [])

 const handleLogout =()=>{
    setState(initialState)
    localStorage.removeItem("user")
 
 }



  return (
    //<Auth.Provider value={{isAuth:state.isAuth,user:state.user, isAppLoading}}>
    <Auth.Provider value={{...state,isAppLoading,handleLogout,dispatch:setState}}>
{children}
    </Auth.Provider>
  )
}
export const useAuth =()=>useContext(Auth)
export default AuthContext