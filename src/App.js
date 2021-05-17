import 'todomvc-app-css/index.css';
import { Footer } from './Footer';
import { Header } from './Header';
import { Info } from './Info';
import { TodoList } from './TodoList';
import { ToggleAllButton } from './ToggleAllButton';

const MOCK_DATA = [
  {
    id: 'some-random-value-0',
    name: 'Make todos with React',
    completed: false,
  },
  {
    id: 'some-random-value-1',
    name: 'try fetch api',
    completed: true,
  }
];

function App() {
  return (
    <>
      <section className="todoapp">
        <Header />
        <section className="main">
          <ToggleAllButton />
          <TodoList />
        </section>
        <Footer />
      </section>
      <Info />
    </>
  );
}

export default App;
