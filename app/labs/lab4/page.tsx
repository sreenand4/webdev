"use client";
import Link from "next/link";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import UrlEncoding from "./UrlEncoding";
import TodoList from "./redux/todos/TodoList";

export default function Lab4() {
  function sayHello() {
    alert("Hello");
  }

  return (
    <div id="wd-lab4">
      <h3>Lab 4</h3>
      <ClickEvent />
      <PassingDataOnEvent />
      <div id="wd-passing-functions">
        <PassingFunctions theFunction={sayHello} />
      </div>
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ParentStateComponent />
      <UrlEncoding />
      <Link href="/labs/lab4/redux" id="wd-redux-examples-link">
        Redux Examples
      </Link>
      <hr />
      <Link href="/labs/lab4/react-context" id="wd-context-examples-link">
        React Context Examples
      </Link>
      <hr />
      <Link href="/labs/lab4/zustand" id="wd-zustand-examples-link">
        Zustand Examples
      </Link>
      <hr/>
      <TodoList />
    </div>
  );
}
