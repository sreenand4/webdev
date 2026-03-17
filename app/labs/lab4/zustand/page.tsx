"use client";
import ZustandCounter from "./counter";
import ZustandTodoList from "./todos/ZustandTodoList";

export default function ZustandExamples() {
 return (
   <div className="container mt-4">
     <h1>Zustand Examples</h1>
     <ZustandCounter />
     <hr />
     <ZustandTodoList />
   </div>
 );
}
