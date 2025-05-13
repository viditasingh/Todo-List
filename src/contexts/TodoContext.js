import { createContext, useContext } from "react";

export const TodoContext = createContext({
    Todos: [
        {
            id: 1,
            title: "todo msg",
            completed: false
        }
    ],

    add: (title)=>{},
    complete: (id)=>{},
    edit: (todo, id)=>{},
    delete: (id)=>{}
    
});


export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider