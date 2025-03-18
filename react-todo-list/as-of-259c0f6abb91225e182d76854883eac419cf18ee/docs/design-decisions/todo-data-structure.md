# Todo Item Data Structure Design

## Decision

For this Todo List application, we've chosen to use the following data structure for todo items:

```typescript
interface Todo {
  id: string;         // Unique identifier
  text: string;       // The content of the todo
  completed: boolean; // Whether the todo is completed
  createdAt: number;  // Timestamp of when the todo was created
}
```

## Alternatives Considered

1. **Simpler structure**: Just `{ id, text, completed }`
   - Pro: Minimalist, sufficient for basic functionality
   - Con: No way to sort by creation time or implement features that need timestamps

2. **More complex structure**: Additional fields like `priority`, `dueDate`, `category`
   - Pro: Would support more advanced todo management
   - Con: Overly complex for the current requirements, would add UI complexity

3. **Using objects instead of arrays for storage**:
   - Pro: Faster lookups by ID
   - Con: More complex to iterate and filter, which is the primary operation

## Rationale

1. We included a `createdAt` timestamp to enable sorting todos by creation time, which provides a predictable and useful default ordering.

2. We chose UUIDs for IDs rather than sequential numbers to avoid potential conflicts, especially if we later implement syncing with a backend.

3. We kept the structure relatively simple to match the requirements while allowing for potential future enhancements.

4. We chose to store todos in an array rather than an object map because:
   - The typical operations (listing, filtering) benefit from array methods
   - The number of todos is expected to be small enough that performance difference is negligible
   - Arrays preserve order, which is important for a todo list