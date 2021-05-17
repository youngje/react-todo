export function TodoList({ todos = [] }) {
  if (todos.length < 1) return null;

  return (
    <ul className="todo-list">
      {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </ul>
  );
}

function TodoItem({ todo }) {
  const { name, completed } = todo

  return (
    <li className={completed ? 'completed' : ''}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={() => {}}
        />
        <label>{name}</label>
        <button className="destroy" />
      </div>
      <input
        className="edit"
        value={name}
        onChange={() => {}}
      />
    </li>
  );
}
