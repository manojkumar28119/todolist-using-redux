import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./actions";
import TodoList from "./component/TodoList";

function App() {
  // Initialize dispatch function from useDispatch hook
  const dispatch = useDispatch();

  // Local state for storing the new todo text
  const [todoText, setTodoText] = useState("");

  // Retrieve the list of todos from the Redux store using useSelector
  const todos = useSelector((state) => state.todos);

  // Event handler for updating the todoText state when the input changes
  const onChangeTodo = (event) => {
    setTodoText(event.target.value);
  };

  // Event handler for dispatching the addTodo action with the new todo item
  const onClickAddBtn = () => {
    if (todoText.trim() !== "") {
      dispatch(addTodo({ text: todoText, isChecked: false }));
      setTodoText(""); // Clear input field after adding the todo
    }
  };

  // Event handler for saving the current list of todos to localStorage
  const onClickSaveBtn = () => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  };

  return (
    <div className="todos-bg-container">
      <div className="main-card">
        <h1 className="todos-heading">Todos</h1>
        <h1 className="create-task-heading">
          Create <span className="create-task-heading-subpart">Task</span>
        </h1>
        <input
          type="text"
          value={todoText}
          id="todoUserInput"
          className="todo-user-input"
          placeholder="What needs to be done?"
          onChange={onChangeTodo} // Update todoText on input change
        />
        <button className="button" onClick={onClickAddBtn}>
          Add
        </button>
        <h1 className="todo-items-heading">
          My <span className="todo-items-heading-subpart">Tasks</span>
        </h1>
        <TodoList /> {/* Component to display the list of todos */}
        <button className="button" onClick={onClickSaveBtn}>
          Save
        </button>
      </div>
    </div>
  );
}

export default App;
