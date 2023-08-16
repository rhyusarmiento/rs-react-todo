function AddItem() {
    return (
      <div className="todo-additem">
        <input type="text" placeholder="Whats up?" />
        <button type="button" className="sendBtn">Add</button>
      </div>
    );
}

export default AddItem;