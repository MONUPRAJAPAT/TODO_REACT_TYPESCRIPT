import { useState } from "react";
import { useTodos } from "../context/ToDoContext";
import { Input ,Button, Space } from 'antd';

export const AddToDo=()=>{
    const [todo,setTodo]=useState('');
    const {handleTodo}=useTodos();
    const handleSubmit=(e:any)=>{
        e.preventDefault();
        handleTodo(todo);
        setTodo('');
    }
    return (
        <>
          <div style={{marginTop:'5rem'}}>
           <Space direction="horizontal" size={"middle"}>
            <Input placeholder="Enter Task" type="text" value={todo} onChange={(e)=> setTodo(e.target.value)} />
            <Button disabled={todo === ''} type="primary" onClick={handleSubmit}>Add</Button>
           </Space>
          </div>
        </>
    )
}