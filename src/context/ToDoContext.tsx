import {ReactNode, createContext, useContext, useState} from "react";

export type TodoProviderProps ={
    children: ReactNode
}
export type Todo ={
    id: string;
    content:string;
    completed:boolean;
    createdAt: Date;
}
export type TodoContext ={
    todos:Todo[];
    handleTodo: (task:string) => void;
    handleToggleChecked: (id:string)=>void;
    handleDeleteTodo: (id:string)=>void;
}

export const todoContext = createContext<TodoContext | null>(null);

export const TodoProvider=({children}:TodoProviderProps)=>{
    const [todos,setTodos]=useState<Todo[]>(()=>{
        try{
          let newTodos = localStorage.getItem('todos') ||'[]';
          return JSON.parse(newTodos) as Todo[];
        }
        catch(error){
          return []
        }
    });

    const handleTodo=(task:string)=>{
      setTodos((prev)=>{
        let newTodos=[ {
            id:Math.random().toString(),
            content: task,
            completed:false,
            createdAt: new Date()
        },
        ...prev];
        localStorage.setItem('todos',JSON.stringify(newTodos));
        return newTodos;
      });
    }

    const handleToggleChecked=(id:string)=>{
      setTodos((prev)=>{
        let newTodos = prev.map((todo:Todo)=>{
            if(todo.id === id){
                return {
                    ...todo,
                    completed: !(todo.completed)
                }
            }
            return todo;
        })
        localStorage.setItem('todos',JSON.stringify(newTodos));
        return newTodos;
      });
    }

    const handleDeleteTodo=(id:string)=>{
       setTodos((prev)=>{
          let newTodos = prev.filter((todo)=> todo.id !== id);
          localStorage.setItem('todos',JSON.stringify(newTodos));
          return newTodos;
       });
    }
  return <todoContext.Provider value={{todos,handleTodo,handleToggleChecked,handleDeleteTodo}}>
         {children}
  </todoContext.Provider>
}

// consumer

export const useTodos=()=>{
    const todoConsumer = useContext(todoContext);
    if(!todoConsumer){
        throw new Error('Please Wrap the Element');
    }
    return todoConsumer;
}