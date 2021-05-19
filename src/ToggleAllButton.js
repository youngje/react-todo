export function ToggleAllButton({ todos, completAllTodo, resetAllTodo }) {
  const areAllCompleted = todos.length && todos.every(todo => todo.completed)
  const onToggleAllClick = () => {
    if (areAllCompleted) return resetAllTodo();
    return completAllTodo();
  }

  return (
    <>
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={areAllCompleted}
        readOnly
      />
      <label
        htmlFor="toggle-all"
        onClick={onToggleAllClick}
      >
        Mark all as complete
      </label>
    </>
  );
}
