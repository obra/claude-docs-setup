// ABOUTME: Contains integration tests for the App component
// ABOUTME: Tests todo management operations (add, toggle, delete) and localStorage

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import * as localStorageUtils from './utils/localStorage';

// Mock localStorage utils
vi.mock('./utils/localStorage', () => ({
  getTodos: vi.fn(),
  saveTodos: vi.fn()
}));

describe('App', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(localStorageUtils.getTodos).mockReturnValue([]);
  });
  
  it('renders the app with initial elements', () => {
    render(<App />);
    
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Add a task...')).toBeInTheDocument();
    expect(screen.getByText('0 active, 0 completed')).toBeInTheDocument();
  });
  
  it('loads todos from localStorage on initial render', () => {
    render(<App />);
    
    expect(localStorageUtils.getTodos).toHaveBeenCalledTimes(1);
  });
  
  it('adds a new todo when submitted', () => {
    render(<App />);
    
    const input = screen.getByPlaceholderText('Add a task...');
    const addButton = screen.getByRole('button', { name: 'Add' });
    
    fireEvent.change(input, { target: { value: 'New todo item' } });
    fireEvent.click(addButton);
    
    expect(screen.getByText('New todo item')).toBeInTheDocument();
    expect(localStorageUtils.saveTodos).toHaveBeenCalled();
    expect(screen.getByText('1 active, 0 completed')).toBeInTheDocument();
  });
  
  it('toggles a todo when checkbox is clicked', async () => {
    // Mock initial todo
    vi.mocked(localStorageUtils.getTodos).mockReturnValue([
      { id: '1', text: 'Test todo', completed: false, createdAt: Date.now() }
    ]);
    
    render(<App />);
    
    const checkbox = screen.getByRole('checkbox');
    
    fireEvent.click(checkbox);
    
    expect(localStorageUtils.saveTodos).toHaveBeenCalled();
    expect(screen.getByText('0 active, 1 completed')).toBeInTheDocument();
  });
  
  it('deletes a todo when delete button is clicked', () => {
    // Mock initial todo
    vi.mocked(localStorageUtils.getTodos).mockReturnValue([
      { id: '1', text: 'Test todo', completed: false, createdAt: Date.now() }
    ]);
    
    render(<App />);
    
    const deleteButton = screen.getByRole('button', { name: 'Delete todo' });
    
    fireEvent.click(deleteButton);
    
    expect(localStorageUtils.saveTodos).toHaveBeenCalled();
    expect(screen.queryByText('Test todo')).not.toBeInTheDocument();
    expect(screen.getByText('0 active, 0 completed')).toBeInTheDocument();
  });
  
  it('filters todos correctly', () => {
    // Mock initial todos with different states
    vi.mocked(localStorageUtils.getTodos).mockReturnValue([
      { id: '1', text: 'Active todo', completed: false, createdAt: Date.now() },
      { id: '2', text: 'Completed todo', completed: true, createdAt: Date.now() }
    ]);
    
    render(<App />);
    
    // Initially all todos should be visible
    expect(screen.getByText('Active todo')).toBeInTheDocument();
    expect(screen.getByText('Completed todo')).toBeInTheDocument();
    
    // Click on Active filter
    fireEvent.click(screen.getByText('Active'));
    
    expect(screen.getByText('Active todo')).toBeInTheDocument();
    expect(screen.queryByText('Completed todo')).not.toBeInTheDocument();
    
    // Click on Completed filter
    fireEvent.click(screen.getByText('Completed'));
    
    expect(screen.queryByText('Active todo')).not.toBeInTheDocument();
    expect(screen.getByText('Completed todo')).toBeInTheDocument();
  });
});