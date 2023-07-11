import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/slices/counter';

function App() {
  const dispatch = useDispatch()
  const count = useSelector(state => state.count)

  return (
    <div className="App">
      <header className="App-header">
        <h1>react - redux</h1>
        <h2>counter app</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <div className='counter'>
          <button  onClick={() => {dispatch(increment())}}>+</button>
          <h1>{count}</h1>
          <button  onClick={() => {dispatch(decrement())}}>-</button>
        </div>
      </header>
    </div>
  );
}

export default App;
