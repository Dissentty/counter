import logo from './logo.svg';
import './App.css';
import React from 'react'


function App() {
  const [counter, setCounter] = React.useState(0);

  const upCounter = () => {
    setCounter(counter + 1);
  }

  const downCounter = () => {
    setCounter(counter - 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Счетчик:</p>
        <p>{counter}</p>
        <div>
          <button onClick={downCounter} className='myButtonMinus'>-1</button><button onClick={upCounter} className='myButtonPlus'>+1</button>
        </div>
      </header>
    </div>
  );
}

export default App;
