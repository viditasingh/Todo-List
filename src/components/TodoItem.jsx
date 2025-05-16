import React, { useState } from 'react'
import { useTodo } from '../contexts'

function TodoItem({ todo }) {
    
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMessage, setTodoMessage] = useState(todo.title)
    const {edit, complete, deleteTask} = useTodo()

    const editTodo = ()=>{
        edit({...todo, title:todoMessage},todo.id)
        setIsTodoEditable(false)
    }

    const toggleCompleted = ()=>{
        complete(todo.id)
    }

    return (
        <div
            onClick={toggleCompleted}
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent cursor-default"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMessage}
                onChange={(e) => setTodoMessage(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex cursor-pointer w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex cursor-pointer w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTask(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;

