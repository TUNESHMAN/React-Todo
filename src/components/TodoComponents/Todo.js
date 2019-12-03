import React from "react";

const Todo = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="item" key={todo.id}>
          <span onClick={()=>{deleteTodo(todo.id)}}>{todo.task}</span>
          <button onClick={()=>{deleteTodo(todo.id)}}>CLEAR COMPLETED</button>
        </div>
      );
    })
  ) : (
    <p>You have no todo's left</p>
  );
  return <div>{todoList}</div>;
};

export default Todo;
