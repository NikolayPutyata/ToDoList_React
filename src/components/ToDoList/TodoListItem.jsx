const TodoListItem = ({ toDoText, deleteFu, id }) => {
  return (
    <>
      <li id={id}>
        <p>{toDoText}</p>

        <button type="button" onClick={() => deleteFu(id)}>
          Delete
        </button>
      </li>
    </>
  );
};

export default TodoListItem;
