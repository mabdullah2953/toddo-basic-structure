import { Typography,Button,Table, Space} from "antd"
import dayjs from "dayjs"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
    const {Title,Text} =  Typography
 
const All = () => {
    const navigate = useNavigate()
    const [todos,setTodos] = useState([])
    useEffect (()=>{
 const todos = JSON.parse(localStorage.getItem("todos")) 
 if(todos){setTodos(todos)}

 //const todos = JSON.parse(localStorage.getItem("todos")) || []
 //setTodos(todos)
console.log('todos',todos)

    },[])

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
     
    
      render: (_,record) =>( <Space >
      <a> Edit</a>
        <a> Delete </a>
      </Space>),
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