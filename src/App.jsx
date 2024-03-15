import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './component/Footer'
import Card from './component/Card'
function App() {
  
  const [color, setColor] =useState('blue')
 
  return (
    <>
      <div className='h-screen w-full duration-200 ' style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
         <div className='rounded-full bg-white flex flex-wrap justify-center gap-3 px-3 py-2'>
          <button className='outline-none px-4 py-1 rounded-full text-white hover:scale-110 transform transition duration-100' style={{backgroundColor:'red'}} onClick={()=>setColor('red')} >Red</button>
          <button className='outline-none px-4 py-1 rounded-full text-white hover:scale-110 transform transition duration-100' style={{backgroundColor:'green'}} onClick={()=>setColor('green')} >Green</button>
          <button className='outline-none px-4 py-1 rounded-full text-white hover:scale-110 transform transition duration-100' style={{backgroundColor:'blue'}} onClick={()=>setColor('blue')} >Blue</button>
          <button className='outline-none px-4 py-1 rounded-full text-white hover:scale-110 transform transition duration-100' style={{backgroundColor:'gray'}} onClick={()=>setColor('gray')}>Gray</button>
          <button className='outline-none px-4 py-1 rounded-full text-white hover:scale-110 transform transition duration-100' style={{backgroundColor:'yellow'}} onClick={()=>setColor('yellow')}>Yellow</button>
          <button className='outline-none px-4 py-1 rounded-full text-white hover:scale-110 transform transition duration-100' style={{backgroundColor:'pink'}} onClick={()=>setColor('pink')}>Pink</button>
          <button className='outline-none px-4 py-1 rounded-full text-white hover:scale-110 transform transition duration-100' style={{backgroundColor:'black'}} onClick={()=>setColor('black')}>Black</button>
          <button className='outline-none px-4 py-1 rounded-full text-black hover:scale-110 transform transition duration-100' style={{backgroundColor:'white'}} onClick={()=>setColor('white')}>White</button>
         </div>
        </div>
      </div> 
    </>
  )
}

export default App
