// ABOUTME: Defines common TypeScript types used throughout the application
// ABOUTME: Contains Todo type and filter types for task management

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

export type FilterType = 'all' | 'active' | 'completed';