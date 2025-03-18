// ABOUTME: Component for rendering the list of todo items
// ABOUTME: Filters and displays todos based on selected filter

import { FilterType, Todo } from '../types';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  activeFilter: FilterType;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

function TodoList({ todos, activeFilter, onToggle, onDelete }: TodoListProps) {
  const filteredTodos = todos.filter(todo => {
    if (activeFilter === 'active') return !todo.completed;
    if (activeFilter === 'completed') return todo.completed;
    return true; // 'all' filter
  });

  if (filteredTodos.length === 0) {
    return <p className="empty-state">No tasks to display</p>;
  }

  return (
    <ul className="todo-list">
      {filteredTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;