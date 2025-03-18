// ABOUTME: Contains tests for the TodoList component
// ABOUTME: Tests filtering functionality and rendering of TodoItems

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';
import { Todo } from '../types';

describe('TodoList', () => {
  const mockTodos: Todo[] = [
    { id: '1', text: 'Active todo', completed: false, createdAt: Date.now() },
    { id: '2', text: 'Completed todo', completed: true, createdAt: Date.now() }
  ];
  
  it('renders all todos when filter is "all"', () => {
    render(
      <TodoList 
        todos={mockTodos}
        activeFilter="all"
        onToggle={() => {}}
        onDelete={() => {}}
      />
    );
    
    expect(screen.getByText('Active todo')).toBeInTheDocument();
    expect(screen.getByText('Completed todo')).toBeInTheDocument();
  });
  
  it('renders only active todos when filter is "active"', () => {
    render(
      <TodoList 
        todos={mockTodos}
        activeFilter="active"
        onToggle={() => {}}
        onDelete={() => {}}
      />
    );
    
    expect(screen.getByText('Active todo')).toBeInTheDocument();
    expect(screen.queryByText('Completed todo')).not.toBeInTheDocument();
  });
  
  it('renders only completed todos when filter is "completed"', () => {
    render(
      <TodoList 
        todos={mockTodos}
        activeFilter="completed"
        onToggle={() => {}}
        onDelete={() => {}}
      />
    );
    
    expect(screen.queryByText('Active todo')).not.toBeInTheDocument();
    expect(screen.getByText('Completed todo')).toBeInTheDocument();
  });
  
  it('shows empty state when no todos match the filter', () => {
    render(
      <TodoList 
        todos={[]}
        activeFilter="all"
        onToggle={() => {}}
        onDelete={() => {}}
      />
    );
    
    expect(screen.getByText('No tasks to display')).toBeInTheDocument();
  });
});