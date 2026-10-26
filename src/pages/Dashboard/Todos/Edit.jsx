import {  Typography,Form, Input, Button, DatePicker, Select } from "antd"
import { useEffect, useState } from "react"

import {useNavigate, useParams } from "react-router-dom"
import dayjs from "dayjs"

const initialState = {title:"",dueDate:"",description:"",priority:""}
const {Title} =Typography
const {Option} = Select;

const Edit = () => {

const [state,setState] = useState(initialState)
const [isProcessing,setIsProcessing] = useState(false)
const navigate = useNavigate()
const params  = useParams()
const { id } = useParams();
const handleChange = e=>setState(state=>({...state,[e.target.name]:e.target.value}))
 useEffect (()=>{
    const {id} = params;
    const todos = JSON.parse(localStorage.getItem("todos")) || []
const todo = todos.find(todo => todo.id === id)
setState(todo)
 },[params])




const handleSubmit = ()=>{

let{title,dueDate,description,priority,status,isCompleted} = state
title = title.trim()
 if(title.length<3){return window.toastify("Please Enter Title","error")}
const todo = { title,dueDate,description,priority,status,isCompleted}

todo.updateAt = new Date().getTime()


setIsProcessing(true)
const todos =JSON.parse(localStorage.getItem("todos"))|| []
const updatedTodos = todos.map(item=>{
    if(item.id === id)
        return {...item,...todo}
    return item
})


setTimeout(() => {
    localStorage.setItem("todos", JSON.stringify(updatedTodos))
  setIsProcessing(false)

  window.toastify(" A Todo has  been successfully updated ","success")

}, 500);

}

  return (
    <main className="auth flex-center">
      <div className="container ">
        <div  className="card p-3 p-4 mx-auto"> 

         <div className="d-flex  align-iitems-center justify-content-between mb-4">
        <Title level={2}  className="mb-0">
            Update Todo
          </Title>
         <Button type="primary" onClick={()=>{navigate("/dashboard/todos")}}> Todo </Button>
         </div>
         
          <Form layout="vertical">
                       <Form.Item label="Title" required>
              <Input type="text"  size="large" placeholder="Enter Title" value={state?.title ?? ""} name="title" onChange={handleChange}/>
            </Form.Item>
               <Form.Item label="Due Date" required >
              <DatePicker size="large" placeholder="Enter Due Date" value={state.dueDate ? dayjs(state.dueDate):null} style={{width:"100%"}} className="w-full" name="dueDate" onChange={(Object,string)=>{setState(state=>({...state,dueDate:string}))}}/>
            </Form.Item>
                 <Form.Item label="Description" >
              <Input.TextArea placeholder="Enter Description" value={state.description} name="description" onChange={handleChange} style={{height:100,resize:"none"}}/>
            </Form.Item>
              <Form.Item label="Priority" >
            <Select size="large" placeholder="Please Select Priority" value={state.priority} onChange={(value)=>{setState(state=>({...state,priority:value}))}}>  
            <Option value="low">Low </Option>
            <Option value="medium"> Medium </Option>
            <Option value="high"> High </Option>
            </Select>
            </Form.Item>
                
            <Button type="primary" size="large"block htmlType="submit" loading={isProcessing} onClick={handleSubmit}> Edit Todo </Button>
          </Form>
      </div>

      </div>
    </main>
  )
}

export default Edit