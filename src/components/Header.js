import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todos';

export function Header() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    if (event.key !== 'Enter') return;
    if (!name) return;

    dispatch(addTodo(name));
    setName('');
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={name}
        onChange={(event) => setName(event.target.value)}
        onKeyUp={handleSubmit}
        autoFocus
      />
    </header>
  );
}
