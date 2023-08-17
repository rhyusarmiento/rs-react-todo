import React, {useState} from 'react';

function App() {
  const [allTodos, setTodos] = useState([]);
  const [newDiscription, setDiscription] = useState("");
  const [completedTodo, setCompletedTodo] = useState([]);
  const theDate = new Date();

  const handleAddItem = () => {
    let newTodoItem = {
      discription:newDiscription,
      date:`${theDate.getMonth() + 1}/${theDate.getDate()}`,
    }

    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);
  }

  const handleDeleteItem = (index, test) => {
    if (test === false) {
      let currentList = [...allTodos];
      currentList.splice(index, 1);
      setTodos(currentList);
    } else if (test === true) {
      let unRemovedList = [...completedTodo];
      unRemovedList.splice(index, 1);
      setCompletedTodo(unRemovedList)
    }
  }

  const handleCompleted = (index) => {
    let completedList = allTodos.splice(index, 1);
    setCompletedTodo(completedTodo.concat(completedList));
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
            {allTodos.map((item, index) => {
              return (
                <div className="todo-item" key={index}>
                  <p>{item.date}</p>
                  <p>{item.discription}</p>
                  <div className="button-wrapper">
                    <button 
                      type="button" 
                      className="completedBtn"
                      onClick={() => handleCompleted(index)}
                    >
                    DONE
                    </button>
                    <button 
                      type="button" 
                      className="removeBtn"
                      onClick={() => handleDeleteItem(index, false)}
                      >
                      REMOVE
                    </button>
                  </div>
                </div>
              )}
            )}
          </div>
          <div className='completed-items'>
            <h5>COMPLETED</h5>
            {completedTodo.map((item, index) => {
              return (
                <div className="todo-item-completed" key={index}>
                  <p>{item.date}</p>
                  <p>{item.discription}</p>
                  <button 
                    type="button" 
                    className="removeBtn"
                    onClick={() => handleDeleteItem(index, true)}
                  >
                    REMOVE
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;