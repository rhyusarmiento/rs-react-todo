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
        <div className='todo-items'>
          <Item />
        </div>
      </div>
    </div>
  );
}

export default App;

