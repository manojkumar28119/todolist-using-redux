import { useSelector } from "react-redux"; // Importing useSelector hook from react-redux to access Redux state
import "./index.css"; // Importing styles for the component

import TodoItem from "../TodoItem"; // Importing the TodoItem component

// Functional component to display a list of todos
const TodoList = () => {
  // useSelector hook to access the todos state from the Redux store
  const todos = useSelector((state) => state.todos);

  console.log(todos);

  return (
    // Rendering a list of todo items
    <ul className="todo-items-container">
      {/* Mapping over the todos array and rendering a TodoItem for each todo */}
      {todos.map((each) => (
        <TodoItem key={each.id} item={each} />
      ))}
    </ul>
  );
};

export default TodoList; // Exporting the TodoList component 
