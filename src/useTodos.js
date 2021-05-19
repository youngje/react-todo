import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { MOCK_DATA } from './App';

export function useTodos() {
  const [todos, setTodos] = useState(MOCK_DATA);

  const addTodo = (name) => {
    const todo = {
      id: uuid(),
      name,
      completed: false,
    };
    setTodos([...todos, todo]);
  };

  const toggleTodo = (id) => {
    const newTodos = todos.map(todo => {
      if (todo.id !== id)
        return todo;
      return { ...todo, completed: !todo.completed };
    });
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  return { todos, addTodo, toggleTodo, deleteTodo };
}
