// Action creators for the Todo application

// Action to add a new todo item
// todo - The todo object containing text and isChecked status and unique id
// Action object with type 'ADD_TODO' and payload containing the new todo
export function addTodo(todo) {
    return { type: "ADD_TODO", payload: todo };
}

// Action to toggle the checked status of a todo item
// todoId - The ID of the todo item to be toggled
// Action object with type 'CHECK_TODO' and todoId of the item to toggle
export function EditTodo(todoId) {
    return { type: "CHECK_TODO", todoId };
}

// Action to delete a todo item
// todoId - The ID of the todo item to be deleted
// Action object with type 'DELETE_TODO' and todoId of the item to delete
export function DeleteTodo(todoId) {
    return { type: "DELETE_TODO", todoId };
}
