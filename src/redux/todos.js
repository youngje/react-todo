import { createAction, createReducer } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
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
  },
  {
    id: 'some-random-value-2',
    name: '안녕~',
    completed: false,
  }
];

export const addTodo = createAction('todos/add');
export const toggleTodo = createAction('todos/toggle');
export const deleteTodo = createAction('todos/delete');
export const updateTodo = createAction('toods/update');
export const completeAllTodo = createAction('todos/completeAll');
export const resetAllTodo = createAction('todos/resetAll');
export const clearCompletedTodo = createAction('todos/clearCompleted');

export const todosReducer = createReducer(MOCK_DATA, (builder) => {
  builder
    .addCase(addTodo, (state, action) => {
      const todo = {
        id: uuid(),
        name: action.payload,
        completed: false,
      }
      state.push(todo);
    })
    .addCase(toggleTodo, (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      todo.completed = !todo.completed;
    })
    .addCase(deleteTodo, (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload);
      state.splice(index, 1);
    })
    .addCase(updateTodo, (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload.id);
      state[index] = { ...state[index], ...action.payload }
    })
    .addCase(completeAllTodo, (state, action) => {
      state.forEach(todo => todo.completed = true)
    })
    .addCase(resetAllTodo, (state, action) => {
      state.forEach(todo => todo.completed = false)
    })
    .addCase(clearCompletedTodo, (state, action) => {
      return state.filter(todo => !todo.completed)
    })
});
