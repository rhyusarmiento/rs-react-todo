import './../style/App.css';
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
            <div className=''>
              <h3>todo</h3>
              <Item />
            </div>
            <div className='completed-items'>
              <h3>completed</h3>
              <Item />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

