import { TodoItem } from "./TodoItem";

export function TodoList({ todos = [], toggleTodo, deleteTodo, updateTodo }) {
  if (todos.length < 1) return null;

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </ul>
  );
}
