import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filter';
import { todosReducer } from './todos';

export default configureStore({
  reducer: {
    todos: todosReducer,
    filter: filterReducer,
  },
})
