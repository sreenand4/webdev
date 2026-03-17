import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default function ArrayStateVariable() {
 const { todos } = useSelector((state: RootState) => state.todosReducer);
 const [array, setArray] = useState([1, 2, 3, 4, 5]);
 const addElement = () => {
   setArray([...array, Math.floor(Math.random() * 100)]);
 };
 const deleteElement = (index: number) => {
   setArray(array.filter((_item: number, i: number) => i !== index));
 };
 return (
  <div id="wd-array-state-variables">
   <h2>Array State Variable</h2>
   <button onClick={addElement} className="btn btn-success mb-2">Add Element</button>
   <ul className="list-group w-25">
    {array.map((item: number, index: number) => (
     <li key={index} className="list-group-item"> {item}
      <button onClick={() => deleteElement(index)} className="btn btn-danger float-end">
       Delete</button>
     </li>))}
   </ul>
   <hr/>
   <h3>Redux Todos (Cross-component Access)</h3>
   <ListGroup className="w-50">
     {todos.map((todo: any) => (
       <ListGroupItem key={todo.id}>
         {todo.title}
       </ListGroupItem>
     ))}
   </ListGroup>
   <hr />
  </div>
 );
}
