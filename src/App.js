import 'todomvc-app-css/index.css';
import { useState, useEffect } from 'react';
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
  const {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    updateTodo,
    completAllTodo,
    resetAllTodo,
    clearCompletedTodo,
  } = useTodos();

  const [filter, setFilter] = useState('all');
  const filterFunction = filter === 'active' ? (todo) => !todo.completed : (todo) => todo.completed;
  const filteredTodos = filter === 'all' ? todos : todos.filter(filterFunction);

  useEffect(() => {
    const hashFilter = window.location.hash.replace('#/', '');

    setFilter(hashFilter || 'all');
  }, []);

  return (
    <>
      <section className="todoapp">
        <Header addTodo={addTodo} />
        <section className="main">
          <ToggleAllButton
            todos={todos}
            completAllTodo={completAllTodo}
            resetAllTodo={resetAllTodo}
          />
          <TodoList
            todos={filteredTodos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        </section>
        {todos?.length > 0 && (
          <Footer
            todos={todos}
            clearCompletedTodo={clearCompletedTodo}
            filter={filter}
            setFilter={setFilter}
          />
        )}
      </section>
      <Info />
    </>
  );
}

export default App;
