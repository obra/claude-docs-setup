// ABOUTME: Component for filtering todo items
// ABOUTME: Provides buttons to filter todos by all, active, or completed status

import { FilterType } from '../types';

interface FilterButtonsProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

function FilterButtons({ activeFilter, onFilterChange }: FilterButtonsProps) {
  const filters: FilterType[] = ['all', 'active', 'completed'];
  
  return (
    <div className="filter-buttons">
      {filters.map(filter => (
        <button
          key={filter}
          className={`filter-button ${activeFilter === filter ? 'active' : ''}`}
          onClick={() => onFilterChange(filter)}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;