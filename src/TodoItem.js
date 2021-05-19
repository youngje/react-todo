export function TodoItem({ todo, toggleTodo, deleteTodo }) {
  const { id, name, completed } = todo;

  return (
    <li className={completed ? 'completed' : ''}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={() => { toggleTodo(id) }}
        />
        <label>{name}</label>
        <button
          className="destroy"
          onClick={() => { deleteTodo(id) }}
        />
      </div>
      <input
        className="edit"
        value={name}
        onChange={() => { }}
      />
    </li>
  );
}
