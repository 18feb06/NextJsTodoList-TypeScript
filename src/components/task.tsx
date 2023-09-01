import { todo } from "@/pages";
import { Dispatch, SetStateAction } from "react";

export default function Task({todo, todos, setTodos, index}: {todo: todo, todos: todo[], setTodos: Dispatch<SetStateAction<todo[]>>, index: number}) {
    return (<div className="w-[95%] p-2 bg-white rounded-xl mb-2">
        <h1 className="text-md font-semibold mb-2 w-full">{todo.desc}</h1>
        <div className="flex">
            <button className="p-1 rounded-lg bg-black text-white text-sm font-semibold" onClick={ev => {
                ev.preventDefault();
                setTodos(prevValues => {
                    const todoList = [...prevValues];
                    const Todo = todoList[index];
                    todoList[index] = {desc: Todo.desc, isDone: !Todo.isDone};
                    return todoList;
                });
            }}>{todo.isDone === true ? 'Not Completed' : 'Completed'}</button>
            <button className="p-1 rounded-lg bg-red-500 text-white text-sm font-semibold ml-2" onClick={ev => {
                ev.preventDefault();
                setTodos(prevValues => {
                    const todoList = [...prevValues];
                    const newArray = todoList.slice(0, index).concat(todoList.slice(index + 1));
                    return newArray;
                });
            }}>Delete</button>
        </div>
    </div>)
}