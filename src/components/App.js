import React from 'react';
import AddItem from './AddItem';
import Item from './Item'

function App() {
  return (
    <div className="App">
      <div className='todo-object'>
        <div className='todo-additem-wrapper'>
          <AddItem />
        </div>
        <div className='items-display'>    
          <div className='todo-items'>
            <h5>TODO</h5>
            <Item />
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

