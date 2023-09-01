import { todo } from "@/pages"
import { Dispatch, SetStateAction, useState } from "react"

export default function SearchInput({todos, setTodos}: {todos: todo[], setTodos: Dispatch<SetStateAction<todo[]>>}) {
    const [searchInput, setSearchInput] = useState<string>('');
    return (
        <div className="w-[85%] mx-auto mb-5 text-center" >
            <input className="rounded-xl w-full h-10 px-2" placeholder="Type your task..." onChange={ev => {ev.preventDefault(); setSearchInput(ev.target.value);}} value={searchInput} />
            <button className="bg-white text-black text-lg font-semibold mt-5 p-2 rounded-3xl hover:bg-black hover:text-white" onClick={ev => {
                ev.preventDefault();
                setTodos(prevValues => {
                    return [...prevValues, {desc: searchInput, isDone: false}]
                });
                setSearchInput('');
            }} >Add Task</button>
        </div>
    )
}