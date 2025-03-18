// ABOUTME: Contains tests for the FilterButtons component
// ABOUTME: Tests filter button rendering and click handling

import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import FilterButtons from './FilterButtons';
import { FilterType } from '../types';

describe('FilterButtons', () => {
  it('renders all filter buttons', () => {
    render(
      <FilterButtons activeFilter="all" onFilterChange={() => {}} />
    );
    
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Active')).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();
  });
  
  it('applies active class to the currently selected filter', () => {
    render(
      <FilterButtons activeFilter="active" onFilterChange={() => {}} />
    );
    
    expect(screen.getByText('Active').classList.contains('active')).toBe(true);
    expect(screen.getByText('All').classList.contains('active')).toBe(false);
    expect(screen.getByText('Completed').classList.contains('active')).toBe(false);
  });
  
  it('calls onFilterChange with the correct filter when a button is clicked', () => {
    const mockFilterChange = vi.fn();
    
    render(
      <FilterButtons activeFilter="all" onFilterChange={mockFilterChange} />
    );
    
    fireEvent.click(screen.getByText('Completed'));
    
    expect(mockFilterChange).toHaveBeenCalledWith('completed' as FilterType);
  });
});