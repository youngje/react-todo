import { createAction, createReducer } from '@reduxjs/toolkit';

export const setFilter = createAction('filter/set');

const hashFilter = window.location.hash.replace('#/', '');

export const filterReducer = createReducer(hashFilter || 'all', (builder) => {
  builder
    .addCase(setFilter, (_, action) => action.payload)
})
