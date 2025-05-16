# Todo List React App
A simple, elegant todo list application built with React that allows users to manage their daily tasks efficiently. This application features the ability to add, edit, delete, and mark todos as complete, with data persistence using local storage.

## Features
- **Add new tasks:** Create new todo items with a simple form
- **Edit tasks:** Modify the content of existing todos
- **Delete tasks:** Remove todos that are no longer needed
- **Mark as complete:** Toggle the completion status of todos
- **Local Storage:** Your todos persist between browser sessions
- **Responsive Design:** Works seamlessly on both desktop and mobile devices

## Technologies Used
- React (with Hooks)
- Context API for state management
- Local Storage for data persistence
- Tailwind CSS for styling

## Installation and Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/todo-list-react.git
cd todo-list-react
```

2. Install dependencies:
```bash
npm i
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```http://localhost:5173```

## Project Structure
```bash
todo-list-react/
├── src/
│   ├── components/
│   │   ├── TodoForm.jsx      # Component for adding new todos
│   │   ├── TodoItem.jsx      # Component for displaying/editing individual todos
│   │   └── index.js          # Export file for components
│   ├── contexts/
│   │   ├── TodoContext.js    # Context for managing todo state
│   │   └── index.js          # Export file for contexts
│   ├── App.css               # Main app styles
│   ├── App.jsx               # Main application component
│   ├── main.jsx              # Entry point for the application
│   └── index.css             # Global styles
└── package.json              # Project dependencies and scripts
```

## How to Use
1. **Add a Todo:** Type your task in the input field and click "Add" button
2. **Complete a Todo:** Click the checkbox to mark a todo as complete
3. **Edit a Todo:** Click the pencil icon (✏️), update the text, then click the save icon (📁)
4. **Delete a Todo:** Click the delete icon (❌) to remove a todo

## Future Enhancements
- Due dates for todos
- Priority levels
- Category/tag support
- User authentication
- Cloud storage
- Filtering and sorting options

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Implementation Details
The application uses React's Context API for state management, making it easy to share the todo state across components without prop drilling. The todos are stored in local storage, ensuring that your tasks persist even after you close the browser.

## Key components:
- **App.jsx:** Main component that manages the todo state and provides context
- **TodoForm.jsx:** Form component for adding new todos
- **TodoItem.jsx:** Component for rendering individual todo items with edit/delete functionality

## Development
This project was bootstrapped with Vite and uses React for the UI.