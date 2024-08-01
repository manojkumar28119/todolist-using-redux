import { MdDeleteOutline } from "react-icons/md"; // Importing the delete icon from react-icons
import { EditTodo, DeleteTodo } from "../../actions"; // Importing action creators
import "./index.css"; // Importing CSS styles for the component
import { useDispatch } from "react-redux"; // Importing useDispatch hook from react-redux


// TodoItem component, which receives a todo item as a prop
const TodoItem = (props) => {
  const { item } = props; // Destructuring the item from props
  const { text, isChecked, id } = item; // Destructuring text, isChecked, and id from item
  
  const dispatch = useDispatch(); // Getting dispatch function from Redux

  // Event handler for changing the checkbox state
  const onChangeCheckBox = () => {
    dispatch(EditTodo(id)); // Dispatches the EditTodo action with the item's id
  };

  // Event handler for deleting the todo item
  const onClickDelete = () => {
    dispatch(DeleteTodo(id)); // Dispatches the DeleteTodo action with the item's id
  };

  return (
    <li className="todo-item-container">
      {/* Checkbox for marking the todo as completed */}
      <input
        type="checkbox"
        id={`checkbox${id}`}
        className="checkbox-input"
        onChange={onChangeCheckBox}
        checked={isChecked} // Control the checkbox state based on isChecked
      />
      <div className="label-container">
        {/* Label showing the text of the todo item */}
        <label
          htmlFor={`checkbox${id}`}
          className={`checkbox-label ${isChecked && 'checked'}`} // Add 'checked' class if the item is checked
        >
          {text}
        </label>
        {/* Container for the delete icon */}
        <div className="delete-icon-container" onClick={onClickDelete}>
          <MdDeleteOutline /> {/* Delete icon */}
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
