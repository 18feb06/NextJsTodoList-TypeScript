import SearchInput from "@/components/searchInput";
import Task from "@/components/task";
import { useState } from "react";

export interface todo {
  desc: string,
  isDone: boolean
}

export default function Home() {
  const [todos, setTodos] = useState<todo[]>([]);

  return (
    <div className="w-screen">
      <h1 className="text-center text-black bg-white text-md font-mono">Open for contribution: <a className="text-blue-500 underline" href="https://github.com/18feb06/NextJsTodoList-TypeScript">Click Here</a></h1>
      <h1 className="sm:text-7xl md:text-9xl font-normal text-white mx-auto mt-20 mb-11 text-center ">Task Master</h1>
      <SearchInput todos={todos} setTodos={setTodos}/>
      <div className="mt-6 sm:block md:flex w-[90%] mx-auto">
        <div className="sm:w-[100%] md:w-[45%] text-center sm:mr-0 md:mr-[10%]">
          <h1 className="my-5 text-5xl text-white font-semibold">Non Completed</h1>
          {todos.map((todo, index) => {
            if(todo.isDone === false) {
              return <Task todo={todo} todos={todos} setTodos={setTodos} index={index} />;
            }else {
              return;
            }
          })}
        </div>
        <div className="sm:w-[100%] md:w-[45%] text-center">
          <h1 className="my-5 text-5xl text-white font-semibold mx-auto">Completed</h1>
          {todos.map((todo, index) => {
            if(todo.isDone === true) {
              return <Task todo={todo} todos={todos} setTodos={setTodos} index={index} />;
            }else {
              return;
            }
          })}
        </div>
      </div>
    </div>
  )
}


