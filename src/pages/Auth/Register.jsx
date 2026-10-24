import {  Typography,Form, Input, Button } from "antd"
import { useState } from "react"
import { Link } from "react-router-dom"
const {Title,Paragraph} =Typography

const initialState ={name:"",email:"",password:"",confirmPassword:""}
const Register = () => {
const [state,setState] = useState(initialState)
const [isProcessing,setIsProcessing] = useState(false)

const handleChange = e=>setState(state=>({...state,[e.target.name]:e.target.value}))
const handleRegister = ()=>{
let{name,email,password,confirmPassword} = state
name  = name.trim()
if(name.length<3){ return  window.toastify("Please Enter Your FullName","error")}
if(!window.isVaildEmail(email)){return window.toastify("Please Enter your Vaild Email","error")}
if(password.length<6){return window.toastify("your password must be 6 Character","error")}
if(password!==confirmPassword){return  window.toastify("Your Password Not Match","error")}
 
const user ={uid:window.getRandomId(),name,email,password,status:"active", role:""}
setIsProcessing(true)
const users =JSON.parse(localStorage.getItem("users"))|| []
let isUserFound = users.find(user=>user.email===email)

if (isUserFound) { 
  setIsProcessing(false)
  return window.toastify("User Already Exist","error")}
 
users.push(user)
localStorage.setItem("users",JSON.stringify(users))

setTimeout(() => {
  setIsProcessing(false)
  window.toastify("A new User have Successful Register","success")
}, 500);

console.log('user',user)
}

  return (
    <main className="auth flex-center">
      <div className="container ">
        <div  className="card p-3 p-4 mx-auto"> 

          <Title level={1}  className="text-center">
            Register
          </Title>
          <Paragraph className="text-center">
            Already have an account <Link to="/auth/login">Login</Link> 
          </Paragraph>
          <Form layout="vertical">
            <Form.Item label="Full Name" required> 
             <Input type="text" placeholder="Enter Your Full Name" name="name"onChange={handleChange}/>
            </Form.Item>
            <Form.Item label="Email" required>
              <Input type="email" placeholder="Enter Your Email" name="email" onChange={handleChange}/>
            </Form.Item>
            <Form.Item label="Password" required>
<Input.Password placeholder="password" name="password" onChange={handleChange} />
            </Form.Item>

                   <Form.Item label="Confirm Password" required>
<Input.Password placeholder="Enter Your Confirm password" name="confirmPassword" onChange={handleChange} />
            </Form.Item>
            <Button type="primary" size="large"block htmlType="submit" loading={isProcessing} onClick={handleRegister}> Create Account </Button>
          </Form>
      </div>

      </div>
    </main>
  )
}

export default Register