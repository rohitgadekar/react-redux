import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { addUser, deleteUser } from './redux/slices/list';
import { useState } from 'react'

function App() {

  const [data, setData] = useState('')

  const dispatch = useDispatch()
  const state = useSelector((state) => {
    return state.users
  })

  const handleClick = (e) => {
    console.log(e.target.id)
    dispatch(deleteUser(e.target.id))
  }

  const handleAdd = (e) => {
    if (data !== '') {
      dispatch(addUser(data))
      document.getElementById('txt').value = ''
      setData('')
    }
    else {
      document.getElementById('txt').style.border = '2px solid red'
    }
  }

  const handleChange = (e) => {
    setData(e.target.value)
    document.getElementById('txt').style.border = '2px solid white'
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>react redux</h1>
        <h2>add users to store</h2>
        <div className='logos'>
          <img src={logo} width={300} className="App-logo" alt="logo" />  <br></br>
        </div>
        <div className='wrapper'>
          <div className='ip'>
            <input type='text' id='txt' onChange={handleChange} placeholder='add users to redux store' ></input>
            <button onClick={handleAdd}>➔</button>
          </div>
          <div className='list' >
            <table>
              <tbody>
                <tr>
                  <th>users</th>
                  <th>actions</th>
                </tr>
                {state.map((data, index) => {
                  return <tr key={index}>
                    <td><label>{data}</label></td>
                    <td><button className='x' onClick={handleClick} id={index}>x</button></td>
                  </tr>
                })}
              </tbody>
            </table>
          </div>
        </div>
      </header >
    </div >
  );
}

export default App;
