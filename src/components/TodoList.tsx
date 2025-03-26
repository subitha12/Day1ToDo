import React from "react";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: { id: number; text: string }[];
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo, editTodo }) => {
  return (
    <div className="todo-list">
      {todos.length === 0 ? <p>No tasks yet! ✨</p> : null}
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} editTodo={editTodo} />
      ))}
    </div>
  );
};

export default TodoList;
