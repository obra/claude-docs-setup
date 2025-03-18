// ABOUTME: Provides utilities for interacting with localStorage
// ABOUTME: Contains functions to save and retrieve todos from browser storage

import { Todo } from '../types';

const STORAGE_KEY = 'react-todo-list-todos';

export const getTodos = (): Todo[] => {
  const storedTodos = localStorage.getItem(STORAGE_KEY);
  return storedTodos ? JSON.parse(storedTodos) : [];
};

export const saveTodos = (todos: Todo[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};