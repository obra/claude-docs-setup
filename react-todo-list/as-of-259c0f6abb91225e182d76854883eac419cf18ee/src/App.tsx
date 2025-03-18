// ABOUTME: Main application component that manages todo state
// ABOUTME: Handles adding, toggling, and deleting todos with localStorage persistence

import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';
import { FilterType, Todo } from './types';
import { getTodos, saveTodos } from './utils/localStorage';
import './App.css';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  // Load todos from localStorage on initial render
  useEffect(() => {
    setTodos(getTodos());
  }, []);

  // Save todos to localStorage when they change
  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      text,
      completed: false,
      createdAt: Date.now()
    };
    
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
  };

  // Count todos by status
  const activeTodoCount = todos.filter(todo => !todo.completed).length;
  const completedTodoCount = todos.length - activeTodoCount;

  return (
    <div className="app">
      <header>
        <h1>Todo List</h1>
      </header>
      
      <main>
        <TodoForm onAddTodo={addTodo} />
        
        <div className="todo-stats">
          <p>{activeTodoCount} active, {completedTodoCount} completed</p>
        </div>
        
        <FilterButtons 
          activeFilter={activeFilter} 
          onFilterChange={handleFilterChange} 
        />
        
        <TodoList
          todos={todos}
          activeFilter={activeFilter}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      </main>
    </div>
  );
}

export default App;