// ABOUTME: Contains tests for the TodoItem component
// ABOUTME: Tests toggle and delete functionality

import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from './TodoItem';
import { Todo } from '../types';

describe('TodoItem', () => {
  const mockTodo: Todo = {
    id: '1',
    text: 'Test todo',
    completed: false,
    createdAt: Date.now()
  };
  
  it('renders todo item correctly', () => {
    render(
      <TodoItem 
        todo={mockTodo}
        onToggle={() => {}}
        onDelete={() => {}}
      />
    );
    
    expect(screen.getByText('Test todo')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });
  
  it('renders completed todo with completed styles', () => {
    const completedTodo = { ...mockTodo, completed: true };
    
    render(
      <TodoItem 
        todo={completedTodo}
        onToggle={() => {}}
        onDelete={() => {}}
      />
    );
    
    expect(screen.getByRole('checkbox')).toBeChecked();
    expect(screen.getByText('Test todo').closest('li')).toHaveClass('completed');
  });
  
  it('calls onToggle when checkbox is clicked', () => {
    const mockToggle = vi.fn();
    
    render(
      <TodoItem 
        todo={mockTodo}
        onToggle={mockToggle}
        onDelete={() => {}}
      />
    );
    
    fireEvent.click(screen.getByRole('checkbox'));
    
    expect(mockToggle).toHaveBeenCalledWith(mockTodo.id);
  });
  
  it('calls onDelete when delete button is clicked', () => {
    const mockDelete = vi.fn();
    
    render(
      <TodoItem 
        todo={mockTodo}
        onToggle={() => {}}
        onDelete={mockDelete}
      />
    );
    
    fireEvent.click(screen.getByRole('button', { name: 'Delete todo' }));
    
    expect(mockDelete).toHaveBeenCalledWith(mockTodo.id);
  });
});