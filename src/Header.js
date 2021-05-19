import { useState } from 'react';

export function Header({ addTodo }) {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    if (event.key !== 'Enter') return;
    if (!name) return;

    addTodo(name);
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
