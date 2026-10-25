import {  Typography,Form, Input, Button } from "antd"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/Auth"
const {Title,Paragraph} =Typography

const initialState ={email:""}
const ForgotPassword  = () => {
  const {dispatch} = useAuth()
const [state,setState] = useState(initialState)

const navigate = useNavigate()

const handleChange = e=>setState(state=>({...state,[e.target.name]:e.target.value}))
const handleForgotPassword = ()=>{
let{email} = state
 
console.log("email",email)
navigate("/")
}

  return (
    <main className="auth flex-center">
      <div className="container ">
        <div  className="card p-3 p-4 mx-auto"> 

          <Title level={1}  className="text-center">
            Reset Password
          </Title>
          <Paragraph className="text-center">
         Remember Password <Link to="/auth/login">Login</Link> 
          </Paragraph>
          <Form layout="vertical">
                       <Form.Item label="Email" required>
              <Input type="email" placeholder="Enter Your Email" name="email" onChange={handleChange}/>
            </Form.Item>
                        
            <Button type="primary" size="large"block htmlType="submit"  onClick={handleForgotPassword}> Send Email </Button>
          </Form>
      </div>

      </div>
    </main>
  )
}

export default  ForgotPassword