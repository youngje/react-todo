import { useState, useRef } from 'react';

export function TodoItem({ todo, toggleTodo, deleteTodo, updateTodo }) {
  const { id, name, completed } = todo;
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(name);
  const editInput = useRef(null);

  const completedClass = completed ? 'completed' : '';
  const editingClass = editing ? 'editing' : '';

  const onBlurEditing = () => {
    setEditing(false);
    updateTodo({ id, name: value });
  }

  const handleSubmit = (event) => {
    if (event.key !== 'Enter') return;
    if (!name) return;

    editInput.current.blur();
  }

  return (
    <li className={`${completedClass} ${editingClass}`}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={() => { toggleTodo(id) }}
        />
        <label onDoubleClick={() => { setEditing(true) }}>
          {name}
        </label>
        <button
          className="destroy"
          onClick={() => { deleteTodo(id) }}
        />
      </div>
      <input
        className="edit"
        ref={editInput}
        value={value}
        onChange={(event) => { setValue(event.target.value) }}
        onBlur={onBlurEditing}
        onKeyUp={handleSubmit}
      />
    </li>
  );
}
