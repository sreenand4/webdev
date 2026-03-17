"use client";
import { useTodos } from "./todosContext";
import { ListGroup, ListGroupItem, Button, FormControl } from "react-bootstrap";

export default function ReactContextTodoList() {
  const { todos, todo, setTodo, addTodo, deleteTodo, updateTodo } = useTodos();

  return (
    <div id="wd-todo-list-context">
      <h2>Todo List (Context)</h2>
      <ListGroup className="w-50">
        <ListGroupItem className="d-flex align-items-center">
          <Button onClick={addTodo} id="wd-add-todo-click" className="btn btn-success me-2">
            Add
          </Button>
          <Button onClick={updateTodo} id="wd-update-todo-click" className="btn btn-warning me-2">
            Update
          </Button>
          <FormControl
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          />
        </ListGroupItem>
        {todos.map((t) => (
          <ListGroupItem key={t.id}>
            <Button
              onClick={() => deleteTodo(t.id)}
              id="wd-delete-todo-click"
              className="btn btn-danger float-end ms-2"
            >
              Delete
            </Button>
            <Button
              onClick={() => setTodo(t)}
              id="wd-set-todo-click"
              className="btn btn-primary float-end ms-2"
            >
              Edit
            </Button>
            {t.title}
          </ListGroupItem>
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}
