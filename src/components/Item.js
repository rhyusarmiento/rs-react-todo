function Item() {
    return (
      <div className="todo-item">
        <p>DATE</p>
        <p>Discription</p>
        <div className="button-wrapper">
          <button type="button" className="completedBtn">DONE</button>
          <button type="button" className="removeBtn">REMOVE</button>
        </div>
      </div>
    );
}
  
export default Item;