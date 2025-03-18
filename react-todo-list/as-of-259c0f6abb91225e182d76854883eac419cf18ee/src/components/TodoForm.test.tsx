// ABOUTME: Contains tests for the TodoForm component
// ABOUTME: Tests form submission and input handling

import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoForm from './TodoForm';

describe('TodoForm', () => {
  it('renders the form correctly', () => {
    render(<TodoForm onAddTodo={() => {}} />);
    
    expect(screen.getByPlaceholderText('Add a task...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Add' })).toBeInTheDocument();
  });
  
  it('calls onAddTodo with input text when form is submitted', () => {
    const mockAddTodo = vi.fn();
    render(<TodoForm onAddTodo={mockAddTodo} />);
    
    const input = screen.getByPlaceholderText('Add a task...');
    const form = screen.getByRole('form');
    
    fireEvent.change(input, { target: { value: 'New todo item' } });
    fireEvent.submit(form);
    
    expect(mockAddTodo).toHaveBeenCalledWith('New todo item');
    expect(input).toHaveValue('');
  });
  
  it('does not call onAddTodo when form is submitted with empty text', () => {
    const mockAddTodo = vi.fn();
    render(<TodoForm onAddTodo={mockAddTodo} />);
    
    const form = screen.getByRole('form');
    
    fireEvent.submit(form);
    
    expect(mockAddTodo).not.toHaveBeenCalled();
  });
});