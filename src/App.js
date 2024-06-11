import logo from './logo.svg';
import { useState } from 'react';
import "./App.css"

function App() {
   const[value, setValue] = useState(0);
  return(
     <>
       <div className="App"><h1>Counter Application</h1></div>
        <div className="value">{value}</div>
        <div className='button_div'>
        <button className="btn1" onClick={()=>{setValue(value+1)}}>Increment</button>
        <button className="btn2" onClick={()=>{setValue(value-1)}}>Decrement</button>
        </div>
       </>
  );
}

export default App;
