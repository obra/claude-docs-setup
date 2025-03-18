# React Todo List

A simple React Todo List application that persists tasks in localStorage.

## Features

- Add new tasks
- Mark tasks as complete/incomplete
- Delete tasks
- Filter tasks (All, Active, Completed)
- Data persistence with localStorage

## Technologies

- React
- TypeScript
- Vite
- Vitest + React Testing Library

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

### Running Tests

```bash
npm test
```

## Project Structure

```
/
├── src/
│   ├── components/               # React components
│   │   ├── TodoForm.tsx          # Form for adding new todos
│   │   ├── TodoList.tsx          # Container for todo items
│   │   ├── TodoItem.tsx          # Individual todo item
│   │   └── FilterButtons.tsx     # Filter options for todos
│   ├── utils/                    # Utility functions
│   │   └── localStorage.ts       # localStorage management
│   ├── types.ts                  # TypeScript type definitions
│   ├── App.tsx                   # Main application component
│   ├── main.tsx                  # Application entry point
│   └── App.css                   # Component styles
├── public/                       # Static assets
└── tests/                        # Test files
```

## License

MIT