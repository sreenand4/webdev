"use client";
import { useCounterStore } from "./store";
import { Button } from "react-bootstrap";

export default function ZustandCounter() {
 const { count, increase, decrease, setCount, reset } = useCounterStore(
   (state) => state,
 );

  return (
   <div id="wd-zustand-counter" className="mb-4">
     <h2 className="mb-3">Zustand Counter</h2>
     <h3>Count: {count}</h3>
     <Button onClick={() => increase(1)} className="btn btn-success me-2">Increase</Button>
     <Button onClick={() => decrease(1)} className="btn btn-danger me-2">Decrease</Button>
     <Button onClick={() => setCount(10)} className="btn btn-primary me-2">Set to 10</Button>
     <Button onClick={() => reset()} className="btn btn-secondary">Reset</Button>
     <hr />
   </div>
 );
}
