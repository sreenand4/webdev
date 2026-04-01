"use client";
import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { FaPlusCircle, FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";
import * as client from "./client";
export default function WorkingWithArraysAsynchronously() {
  const [todos, setTodos] = useState<any[]>([]);
  const [errorMessage, setErrorMessage] = useState<any>(null);
  const fetchTodos = async () => {
    const todos = await client.fetchTodos();
    setTodos(todos);
  };
  const removeTodo = async (todo: any) => {
    try {
      const updatedTodos = await client.removeTodo(todo);
      setTodos(updatedTodos);
      setErrorMessage(null);
    } catch (error: any) {
      setErrorMessage(error?.response?.data?.message || error?.message || "Unable to remove todo");
    }
  };
  const deleteTodo = async (todo: any) => {
    try {
      await client.deleteTodo(todo);
      setTodos((prev: any[]) => prev.filter((t) => t.id !== todo.id));
      setErrorMessage(null);
    } catch (error: any) {
      setErrorMessage(error?.response?.data?.message || error?.message || "Unable to delete todo");
    }
  };
  const editTodo = (todo: any) => {
    const updatedTodos = todos.map(
      (t) => t.id === todo.id ? { ...todo, editing: true } : t );
    setTodos(updatedTodos);
  };
  const updateTodo = async (todo: any) => {
    try {
      await client.updateTodo(todo);
      setTodos((prev: any[]) => prev.map((t) => (t.id === todo.id ? todo : t)));
      setErrorMessage(null);
    } catch (error: any) {
      setErrorMessage(error?.response?.data?.message || error?.message || "Unable to update todo");
    }
  };
  const createNewTodo = async () => {
    const todos = await client.createNewTodo();
    setTodos(todos);
    setErrorMessage(null);
  };
  const postNewTodo = async () => {
    const newTodo = await client.postNewTodo({ title: "New Posted Todo", completed: false });
    setTodos((prev: any[]) => [...prev, newTodo]);
    setErrorMessage(null);
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>
      {errorMessage && (<div id="wd-todo-error-message" className="alert alert-danger mb-2 mt-2">{errorMessage}</div>)}
      <h4>
        Todos
        <button
          type="button"
          id="wd-create-todo"
          className="btn btn-link text-success float-end fs-3 p-0 border-0"
          onClick={createNewTodo}
        >
          <FaPlusCircle />
        </button>
        <button
          type="button"
          id="wd-post-todo"
          className="btn btn-link text-primary float-end fs-3 me-3 p-0 border-0"
          onClick={postNewTodo}
        >
          <FaPlusCircle />
        </button>
      </h4>
      <ListGroup>
        {todos.map((todo) => (
          <ListGroupItem key={todo.id}>
            <button
              type="button"
              className="btn btn-link text-primary float-end me-2 mt-1 p-0 border-0"
              onClick={() => editTodo(todo)}
              aria-label={`Edit todo ${todo.id}`}
            >
              <FaPencil />
            </button>
            <button
              type="button"
              id="wd-remove-todo"
              className="btn btn-link text-danger float-end mt-1 p-0 border-0"
              onClick={() => removeTodo(todo)}
              aria-label={`Remove todo ${todo.id}`}
            >
              <FaTrash />
            </button>
            <button
              type="button"
              id="wd-delete-todo"
              className="btn btn-link text-danger float-end me-2 fs-3 p-0 border-0"
              onClick={() => deleteTodo(todo)}
              aria-label={`Delete todo ${todo.id}`}
            >
              <TiDelete />
            </button>
            <input type="checkbox" defaultChecked={todo.completed} className="form-check-input me-2 float-start"
              onChange={(e) => updateTodo({ ...todo, completed: e.target.checked }) } />
              {!todo.editing ? ( todo.title ) : (
                <input className="form-control w-50 float-start" defaultValue={todo.title}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      updateTodo({ ...todo, editing: false });
                    }
                  }}
                  onChange={(e) =>
                    updateTodo({ ...todo, title: e.target.value })
                  }
                />
              )}
          </ListGroupItem>
        ))}
      </ListGroup> <hr />
    </div>
  );
}
