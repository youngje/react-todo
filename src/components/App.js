import 'todomvc-app-css/index.css';
import { useSelector } from 'react-redux';
import { Footer } from './Footer';
import { Header } from './Header';
import { Info } from './Info';
import { TodoList } from './TodoList';
import { ToggleAllButton } from './ToggleAllButton';

function App() {
  const todos = useSelector(state => state.todos);

  return (
    <>
      <section className="todoapp">
        <Header />
        <section className="main">
          <ToggleAllButton />
          <TodoList />
        </section>
        {todos?.length > 0 && (
          <Footer />
        )}
      </section>
      <Info />
    </>
  );
}

export default App;
