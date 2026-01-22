import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [value , setValue] = useState(null);
  const inputRef = useRef();

  useEffect(() => {
    const oldCount = localStorage.getItem("count");
    const oldValue = localStorage.getItem("value");
    setCount(Number(oldCount));
    setValue(Number(oldValue));
  },[]);

  const handleIncrement = () => {
    let newCount = count + (value ?? 1);
    setCount(newCount);
    localStorage.setItem('count' , newCount);
  }

  const handleDecrement = () => {
    let newCount = count - (value ?? 1);
    setCount(newCount);
    localStorage.setItem('count' , newCount);
  }

  const handleSave = (e) => {
    e.preventDefault();
    const inputvalue = Number(inputRef.current.value);
    setValue(inputvalue);
    localStorage.setItem("value", inputvalue);
    inputRef.current.value = '';
  }

  const handleReset = () => {
    setCount(0);
    setValue(null);
    localStorage.removeItem("count");
    localStorage.removeItem("value");
  };

  return (
    <>
      <div className='col-12'>
        <h1>Counter</h1>
      </div>
      <div className='card'>
        <h2>Count : {count}</h2>
        <form action="" method='post' onSubmit={handleSave}>
          <input type="number" name="" ref={inputRef} id="" />
          <button type='submit'>Save</button>
        </form>
        { value ? <h3>Count By : {value}</h3> : null }
        <button type='button' onClick={handleIncrement}>Increment</button>
        <button type='button' onClick={handleDecrement}>Decrement</button>
        <button type='button' onClick={handleReset}>Reset</button>
      </div>
    </>
  )
}

export default App
