import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            title: "todo msg",
            completed: false
        }
    ],

    add: (title)=>{},
    complete: (id)=>{},
    edit: (todo, id)=>{},
    deleteTask: (id)=>{}

});


export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider