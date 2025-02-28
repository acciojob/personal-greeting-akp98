
import React from "react";
import './../styles/App.css';
import {useState} from 'react';
const App = () => {
  const [input,setInput] = useState('');
  const onInput = (e)=>{
      const {value} = e.target
    setInput(value)
  }
  const onClear = ()=>{
    setInput('')
  }
  return (
    <div>
        {/* Do not remove the main div */}
    <p>Enter your name:</p>
    <input value={input} onChange={onInput} />
    {!!input.length&&<p>Hello {input}!</p>}
    <button onClick={onClear}>Clear</button>
    </div>
  )
}

export default App
