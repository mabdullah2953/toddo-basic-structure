import {  Typography,Form, Input, Button } from "antd"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../../context/Auth"
const {Title,Paragraph} =Typography

const initialState ={email:"",password:""}
const Login = () => {
  const {dispatch} = useAuth()
const [state,setState] = useState(initialState)
const [isProcessing,setIsProcessing] = useState(false)


const handleChange = e=>setState(state=>({...state,[e.target.name]:e.target.value}))
const handleLogin = ()=>{
let{email,password} = state
 
setIsProcessing(true)
const users =JSON.parse(localStorage.getItem("users"))|| []
const user = users.find(user=>user.email===email && user.password===password)

if (!user) { 
  
  setIsProcessing(false)
  return window.toastify("invaild Email or  Password","error" )
}
localStorage.setItem("user", JSON.stringify(user))
dispatch({ isAuth: true, user })

 

setTimeout(() => {
  setIsProcessing(false)

  window.toastify(" Login Successfully ","success")

}, 500);

}

  return (
    <main className="auth flex-center">
      <div className="container ">
        <div  className="card p-3 p-4 mx-auto"> 

          <Title level={1}  className="text-center">
            Login
          </Title>
          <Paragraph className="text-center">
           Don't have an Account <Link to="/auth/register">Create Account</Link> 
          </Paragraph>
          <Paragraph className="text-center">
           Forgot Password<Link to="/auth/forgot-password"> Reset Password</Link> 
          </Paragraph>
          <Form layout="vertical">
                       <Form.Item label="Email" required>
              <Input type="email" placeholder="Enter Your Email" name="email" onChange={handleChange}/>
            </Form.Item>
            <Form.Item label="Password" required>
<Input.Password placeholder="password" name="password" onChange={handleChange} />
            </Form.Item>
                
            <Button type="primary" size="large"block htmlType="submit" loading={isProcessing} onClick={handleLogin}> Login </Button>
          </Form>
      </div>

      </div>
    </main>
  )
}

export default Login