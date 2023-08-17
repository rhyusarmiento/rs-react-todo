import React, {useState} from 'react';

function App() {
  const [allTodos, setTodos] = useState([]);
  const [newDiscription, setDiscription] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [newDate, setDate] = useState(null);
  const theDate = new Date();

  const handleAddItem = () => {
    let newTodoItem = {
      discription:newDiscription,
      date:`${theDate.getMonth() + 1}/${theDate.getDate()}`
    }

    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr)
  }

  return (
    <div className="App">
      <div className='todo-object'>
        <div className='todo-additem-wrapper'>
          <div className="todo-additem">
            <input type="text" value={newDiscription} onChange={(e) => setDiscription(e.target.value)} placeholder="Whats up?" />
            <button type="button" className="sendBtn" onClick={handleAddItem}>Add</button>
          </div>
        </div>
        <div className='items-display'>    
          <div className='todo-items'>
            <h5>TODO</h5>
            {allTodos.map((item,index) => {
              return (
                <div className="todo-item" key={index}>
                  <p>{item.date}</p>
                  <p>{item.discription}</p>
                  <div className="button-wrapper">
                    <button type="button" className="completedBtn">DONE</button>
                    <button type="button" className="removeBtn">REMOVE</button>
                  </div>
                </div>
              )}
            )}
          </div>
          <div className='completed-items'>
            <h5>COMPLETED</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

