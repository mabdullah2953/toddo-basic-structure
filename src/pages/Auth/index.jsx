import { Route, Routes } from "react-router-dom"
import Login from "./Login"

import ForgotPassword from "./ForgotPassword"
import Register from "./Register"
import NoPage from "../../components/Misc/NoPage"

const Auth = () => {
  return (
    <>
    <Routes>
        <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
            <Route path="forgoot-password" element={<ForgotPassword/>}/>
           
                <Route path="*" element={<NoPage/>}/>
    </Routes>
    </>
  )
}

export default Auth