"use client";
import { CounterProvider } from "./counter/context";
import CounterContext from "./counter";
import { TodosProvider } from "./todos/todosContext";
import ReactContextTodoList from "./todos/ReactContextTodoList";

export default function ReactContextExamples() {
 return (
   <div className="container mt-4">
     <h1>React Context Examples</h1>
     <CounterProvider>
       <CounterContext />
     </CounterProvider>
     <hr />
     <TodosProvider>
       <ReactContextTodoList />
     </TodosProvider>
   </div>
 );
}
