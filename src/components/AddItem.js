function AddItem() {
    return (
      <div className="todo-additem">
        <div className="input-data">
          <input type="text" placeholder="Whats up?" />
        </div>
        <div className="input-send">
          <button type="button" className="sendBtn">Add</button>
        </div>
      </div>
    );
}

export default AddItem;