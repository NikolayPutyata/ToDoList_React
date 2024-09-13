import { useEffect, useState } from "react";
import TodoList from "./components/ToDoList/TodoList";
import AddItemToList from "./components/AddItemToList/AddItemToList.jsx";
import { nanoid } from "nanoid";
import toDoList from "./components/toDoList.json";
import SearchToDoItem from "./components/SearchToDoItem/SearchToDoItem.jsx";
import "./App.css";

const App = () => {
  const [toDo, setToDo] = useState(() => {
    const data = window.localStorage.getItem("data");
    if (data !== null) {
      return JSON.parse(data);
    }
    return toDoList;
  });
  const [toAdd, setToAdd] = useState("");
  const [searchingWord, setSearchingWord] = useState("");

  const handlerAdd = () => {
    if (toAdd.trim()) {
      setToDo((prev) => [...prev, { id: nanoid(), text: toAdd }]);
      setToAdd("");
    }
  };

  const handlerDelete = (idItemToDelete) => {
    setToDo((prev) => prev.filter((item) => item.id !== idItemToDelete));
  };

  const searchingArrForWord = toDo.filter((item) =>
    item.text.toLowerCase().includes(searchingWord.toLowerCase())
  );

  useEffect(() => {
    window.localStorage.setItem("data", JSON.stringify(toDo));
  }, [toDo]);

  return (
    <>
      <AddItemToList addItemFu={handlerAdd} value={toAdd} changeFu={setToAdd} />
      <SearchToDoItem value={searchingWord} onChangeFu={setSearchingWord} />
      <TodoList list={searchingArrForWord} deleteFu={handlerDelete} />
    </>
  );
};
export default App;
