const FILTERS = [
  { key: 'all', path: '#/', display: 'All' },
  { key: 'active', path: '#/active', display: 'Active' },
  { key: 'completed', path: '#/completed', display: 'Completed' }
];

export function Footer({ todos = [], clearCompletedTodo, filter, setFilter }) {
  const itemsLeft = todos.filter(todo => !todo.completed);
  const itemText = itemsLeft.length === 1 ? 'item' : 'items';

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsLeft.length}</strong> {itemText} left</span>
      <ul className="filters">
        {FILTERS.map(FILTER => (
          <li key={FILTER.key}>
            <a
              className={FILTER.key === filter ? 'selected' : ''}
              href={FILTER.path}
              onClick={() => setFilter(FILTER.key)}
            >
              {FILTER.display}
            </a>
          </li>
        ))}
      </ul>
      <button
        className="clear-completed"
        onClick={clearCompletedTodo}
      >
        Clear completed
      </button>
    </footer>
  );
}
