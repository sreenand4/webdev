"use client";
import { useCounter } from "./context";

export default function CounterContext() {
 const { count, increment, decrement } = useCounter()!;

  return (
   <div id="wd-counter-context" className="mb-4">
     <h2 className="mb-3">Counter Context</h2>
     <h3>{count}</h3>
     <button onClick={increment} id="wd-counter-context-increment-click" className="btn btn-primary me-2">
       Increment
     </button>
     <button onClick={decrement} id="wd-counter-context-decrement-click" className="btn btn-danger">
       Decrement
     </button>
     <hr />
   </div>
 );
}
