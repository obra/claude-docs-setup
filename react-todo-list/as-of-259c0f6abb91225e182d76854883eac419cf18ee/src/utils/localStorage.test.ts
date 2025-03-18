// ABOUTME: Contains tests for localStorage utility functions
// ABOUTME: Tests saving and retrieving todos from localStorage

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { getTodos, saveTodos } from './localStorage';
import { Todo } from '../types';

describe('localStorage utils', () => {
  const mockTodos: Todo[] = [
    { id: '1', text: 'Test todo', completed: false, createdAt: Date.now() }
  ];
  
  beforeEach(() => {
    // Mock localStorage
    const localStorageMock = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      clear: vi.fn()
    };
    
    global.localStorage = localStorageMock as any;
    
    // Clear mocks before each test
    vi.clearAllMocks();
  });
  
  it('should save todos to localStorage', () => {
    saveTodos(mockTodos);
    
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'react-todo-list-todos',
      JSON.stringify(mockTodos)
    );
  });
  
  it('should retrieve todos from localStorage', () => {
    vi.mocked(localStorage.getItem).mockReturnValue(JSON.stringify(mockTodos));
    
    const result = getTodos();
    
    expect(localStorage.getItem).toHaveBeenCalledWith('react-todo-list-todos');
    expect(result).toEqual(mockTodos);
  });
  
  it('should return empty array when localStorage is empty', () => {
    vi.mocked(localStorage.getItem).mockReturnValue(null);
    
    const result = getTodos();
    
    expect(result).toEqual([]);
  });
});