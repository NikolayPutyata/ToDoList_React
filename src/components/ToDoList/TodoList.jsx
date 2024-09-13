import TodoListItem from './TodoListItem';
import { nanoid } from 'nanoid';

const TodoList = ({ list, deleteFu }) => {
  return (
    <>
      <ul>
        {list.map(item => (
          <TodoListItem
            key={nanoid()}
            id={item.id}
            toDoText={item.text}
            deleteFu={deleteFu}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
