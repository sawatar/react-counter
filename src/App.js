import { useState } from 'react';
import './app.scss';

const App = () => {
  const [counter,setCounter] = useState(0);
  const onClickIncrement = () =>{
    setCounter(counter + 1);
  }
  const onClickDescrement = () =>{
    setCounter(counter - 1);
  }

  return (
    <div className="root">
      <div>
        <h2>Счётчик:</h2>
        <h1>{counter}</h1>
        <button onClick={onClickIncrement} className="increment">+ Плюс</button>
        <button onClick={onClickDescrement} className="descrement">Минус -</button>
      </div>
    </div>
  );
}

export default App;



