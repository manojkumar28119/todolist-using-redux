import { createStore } from "redux";

// Retrieve the todo list from localStorage
let stringifiedTodoList = localStorage.getItem("todoList");

// Parse the retrieved string into an object, or set to an empty array if null
let parsedTodoList = JSON.parse(stringifiedTodoList);

// Initial state of the Redux store
const initialState = {
    todos: parsedTodoList !== null ? parsedTodoList : [], // If parsedTodoList is not null, use it; otherwise, start with an empty array
    nextId: 1 // Initial ID for the next todo item
}

// Reducer function to handle different actions on the todos state
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            // Create a new todo item with a unique ID and the provided text
            const newTodo = { id: state.nextId, text: action.payload.text, isChecked: action.payload.isChecked };

            return {
                ...state, // Copy the current state
                todos: [...state.todos, newTodo], // Add the new todo item to the todos array
                nextId: state.nextId + 1 // Increment the nextId for future todos
            };

        case "CHECK_TODO":
            // Toggle the isChecked property of the specified todo item
            const ModifiedTodos = state.todos.map((each) => {
                if (each.id === action.todoId) {
                    return {
                        ...each,
                        isChecked: !each.isChecked // Toggle the isChecked state
                    };
                }
                return each;
            });

            return {
                ...state,
                todos: ModifiedTodos // Update the state with the modified todos array
            };
        
        case "DELETE_TODO":
            // Remove the specified todo item from the todos array
            const newTodos = state.todos.filter((each) => each.id !== action.todoId);

            return {
                ...state,
                todos: newTodos // Update the state with the new todos array
            };
    
        default:
            return state; // Return the unchanged state if the action type doesn't match
    }
}


// Create the Redux store with the todoReducer
const store = createStore(todoReducer);

export default store;

