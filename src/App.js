import 'todomvc-app-css/index.css';
import { Footer } from './Footer';
import { Header } from './Header';
import { Info } from './Info';
import { TodoList } from './TodoList';
import { ToggleAllButton } from './ToggleAllButton';
import { useTodos } from './useTodos';

export const MOCK_DATA = [
  {
    id: 'some-random-value-0',
    name: 'Make todos with React',
    completed: false,
  },
  {
    id: 'some-random-value-1',
    name: 'try fetch api',
    completed: true,
  },
  {
    id: 'some-random-value-2',
    name: '안녕~',
    completed: false,
  }
];

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <>
      <section className="todoapp">
        <Header addTodo={addTodo} />
        <section className="main">
          <ToggleAllButton />
          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        </section>
        {todos?.length > 0 && <Footer todos={todos} />}
      </section>
      <Info />
    </>
  );
}

export default App;
