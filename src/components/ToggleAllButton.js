import { useSelector, useDispatch } from 'react-redux';
import { completeAllTodo, resetAllTodo } from '../redux/todos';

export function ToggleAllButton() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const areAllCompleted = todos.length && todos.every(todo => todo.completed)
  const onToggleAllClick = () => {
    if (areAllCompleted) return dispatch(resetAllTodo());
    return dispatch(completeAllTodo());
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
