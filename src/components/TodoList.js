import { useSelector } from 'react-redux';
import { TodoItem } from './TodoItem';

export function TodoList() {
  const todos = useSelector(state => state.todos);
  const filter = useSelector(state => state.filter);
  const filterFunction = filter === 'active' ? (todo) => !todo.completed : (todo) => todo.completed;
  const filteredTodos = filter === 'all' ? todos : todos.filter(filterFunction);

  if (todos.length < 1) return null;

  return (
    <ul className="todo-list">
      {filteredTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </ul>
  );
}
