import { Todo, useTodos } from "../context/ToDoContext"
import { useSearchParams } from "react-router-dom";
import { Button, Checkbox, List ,Typography } from "antd";
import {DeleteOutlined} from '@ant-design/icons';
const {Text}= Typography;



export const ShowTodo=()=>{
    const {todos,handleToggleChecked,handleDeleteTodo}=useTodos();
    const [searchParams]=useSearchParams();
    const type = searchParams.get('todos');

    let filteredData=todos;

    if(type === 'completed')
     filteredData = todos.filter((todo:Todo)=>{return todo.completed});

     if(type === 'active')
     filteredData = todos.filter((todo:Todo)=>{return !todo.completed});
    
    return (
        <>
         <List
         bordered
         style={{margin:'20px'}}>
           {
            filteredData.map((todo:Todo)=>{
              return <List.Item id={todo.id} style={{padding:'10px', margin:'5px'}}>
                  <Checkbox onChange={()=>handleToggleChecked(todo.id)} id={todo.id} checked={todo.completed}/>
                   <label htmlFor={todo.id} > <Text style={{fontSize:'18px'}} delete={todo.completed}>{todo.content}</Text></label>
                   <div>
                   {
                      todo.completed && 
                      <Button
                      icon={<DeleteOutlined />}
                      style={{color:'red'}} size="small" onClick={()=> handleDeleteTodo(todo.id)}/>
                   } 
                   </div>
              </List.Item>
            })
           }
         </List>
        </>
    )
}