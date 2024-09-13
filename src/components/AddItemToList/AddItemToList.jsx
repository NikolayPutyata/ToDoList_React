const AddItemToList = ({ addItemFu, value, changeFu }) => {
  return (
    <>
      <input
        type="text"
        placeholder="I must do..."
        value={value}
        onChange={(e) => changeFu(e.target.value)}
      />
      <button type="button" onClick={addItemFu}>
        Add
      </button>
    </>
  );
};

export default AddItemToList;
