const SearchToDoItem = ({ value, onChangeFu }) => {
  return (
    <>
      <input
        type="text"
        name="searchWord"
        value={value}
        onChange={e => onChangeFu(e.target.value)}
        placeholder="Search some..."
      />
    </>
  );
};

export default SearchToDoItem;
