export function TodoList() {
  return (
    <ul className="todo-list">
      <TodoItem1 />
      <TodoItem2 />
    </ul>
  );
}

function TodoItem1() {
  return (
    <li className="completed">
      <div className="view">
        <input className="toggle" type="checkbox" checked />
        <label>Taste JavaScript</label>
        <button className="destroy"></button>
      </div>
      <input className="edit" value="Create a TodoMVC template" />
    </li>
  );
}

function TodoItem2() {
  return (
    <li>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>Buy a unicorn</label>
        <button className="destroy"></button>
      </div>
      <input className="edit" value="Rule the web" />
    </li>
  );
}
