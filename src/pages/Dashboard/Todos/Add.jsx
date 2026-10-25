import {  Typography,Form, Input, Button, DatePicker, Select } from "antd"
import { useState } from "react"
import { useAuth } from "../../../context/Auth"
import {useNavigate } from "react-router-dom"

const initialState = {title:"",dueDate:"",description:"",priority:""}
const {Title} =Typography
const {Option} = Select;

const Add = () => {
const {user} = useAuth()
const [state,setState] = useState(initialState)
const [isProcessing,setIsProcessing] = useState(false)
const navigate = useNavigate()

const handleChange = e=>setState(state=>({...state,[e.target.name]:e.target.value}))

const handleSubmit = ()=>{

let{title,dueDate,description,priority} = state
title = title.trim()
 if(title.length<3){return window.toastify("Please Enter Title","error")}
const todo = { title,dueDate,description,priority}
todo.uid = user.uid
todo.id = window.getRandomId()
todo.status  = "active"
todo.isCompleted = false
todo.createdAt = new Date().getTime()


setIsProcessing(true)
const todos =JSON.parse(localStorage.getItem("todos"))|| []
 todos.push(todo)


setTimeout(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  setIsProcessing(false)

  window.toastify(" A new Todo has successfully created ","success")

}, 100);

}

  return (
    <main className="auth flex-center">
      <div className="container ">
        <div  className="card p-3 p-4 mx-auto"> 

         <div className="d-flex  align-iitems-center justify-content-between mb-4">
        <Title level={2}  className="mb-0">
            Add Todo
          </Title>
         <Button type="primary" onClick={()=>{navigate("/dashboard/todos")}}> Todo </Button>
         </div>
         
          <Form layout="vertical">
                       <Form.Item label="Title" required>
              <Input type="text"  size="large" placeholder="Enter Title" name="title" onChange={handleChange}/>
            </Form.Item>
               <Form.Item label="Due Date" required >
              <DatePicker size="large" placeholder="Enter Due Date" style={{width:"100%"}} className="w-full" name="dueDate" onChange={(Object,string)=>{setState(s=>({...state,dueDate:string}))}}/>
            </Form.Item>
                 <Form.Item label="Description" >
              <Input.TextArea placeholder="Enter Description" name="description" onChange={handleChange} style={{height:100,resize:"none"}}/>
            </Form.Item>
              <Form.Item label="Priority" >
            <Select size="large" placeholder="Please Select Priority" onChange={(value)=>{setState(state=>({...state,priority:value}))}}>  
            <Option value="low">Low </Option>
            <Option value="medium"> Medium </Option>
            <Option value="high"> High </Option>
            </Select>
            </Form.Item>
                
            <Button type="primary" size="large"block htmlType="submit" loading={isProcessing} onClick={handleSubmit}> Add Todo </Button>
          </Form>
      </div>

      </div>
    </main>
  )
}

export default Add