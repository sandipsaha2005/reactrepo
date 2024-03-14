import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let Increment=()=>{
    if(count<20){
      setCount(count+1);
    }
  }
  let Decrement=()=>{
    if(count>0){
      setCount(count-1);
    }
    
  }
  return (
    <>
      <h2> Increment & Decrement</h2><br /><br />
      <button>{count}</button><br /><br />
      <button onClick={Increment} >Increment</button><br /><br />
      <button onClick={Decrement} >Decrement</button>
    </>
  )
}

export default App
