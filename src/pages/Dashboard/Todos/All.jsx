import { Typography,Button,Table, Dropdown} from "antd"
import dayjs from "dayjs"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {MoreOutlined} from "@ant-design/icons"
import { DeleteOutlined } from "@ant-design/icons";
import { EditOutlined } from "@ant-design/icons";

    const {Title,Text} =  Typography

 //CRUD Operation
 // C = Create/Add/setItem = post > server pr
 // R = Read/All/GetItem = Get
 // U = Update/Edit = patch/ put
 // D = Delete/RemoveItems = Delete 

const All = () => {
    const navigate = useNavigate()
    const [todos,setTodos] = useState([])
    useEffect (()=>{
 const todos = JSON.parse(localStorage.getItem("todos")) 
 if(todos){setTodos(todos.map(todo=>({...todo,key:todo.id})))}

 //const todos = JSON.parse(localStorage.getItem("todos")) || []
 //setTodos(todos)

    },[])

    const handleDelete =todo=> {
const filteredTodos = todos.filter(item=>item.id!==todo.id)
setTodos(filteredTodos)
localStorage.setItem("todos",JSON.stringify(filteredTodos))
window.toastify("Tode Deleted Sucessfully","success")
}
 const columns = [
    { title: "Title",
      dataIndex: "title",  },
     
    {title: "Due Date",
      dataIndex: "dueDate",},
        { title: "Description", dataIndex: "description", },
    {title: "Priority",dataIndex: "priority", render:text=><Text className="text-capitalize"> {text} </Text>},
    { title: "Date Create",
      dataIndex: "createdAt", render:text=><Text className="text-capitalize"> {dayjs(text).format("ddd-DD-MMM-YYYY,hh:mm:ss A")} </Text> },


     { title: "Action",
     
    
      render: (_,record) =>( <Dropdown menu={{items:[
        {label:"Edit",key:"edit",icon:<EditOutlined/>,onClick:()=>{navigate(`/dashboard/todos/edit/${record.id}`)}},
    // {label:"Edit",key:"edit",icon:<EditOutlined/>,onClick:()=>{navigate("/dashboard/todos/edit/"+record.id)}},
       {label:"Delete",key:"delete",icon:<DeleteOutlined/>,onClick:()=>{handleDelete(record)}}
      ]}} trigger={['click']} >
      <Button className="border-0" icon={<MoreOutlined/> } />   
      </Dropdown>),
    },
  ];



  return (
    <main className="py-5"> 
        <div className="container">
               <div className="d-flex  align-iitems-center justify-content-between mb-4">
        <Title level={2}  className="mb-0">  Todo </Title>
         <Button type="primary" onClick={()=>{navigate("/dashboard/todos/add")}}> Add Todo </Button>
         </div>
             <Table columns={columns} dataSource={todos} />

        </div>
    </main>
  )
}

export default All