import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export function Square(){

  const [clicado, setClicado] = useState(false);

  const handleClick = () => {
    
    if(clicado){
      console.log('Pressionado')
    }else{
      console.log('Liberado')
    }

    setClicado(!clicado);
    
  }

  return <button className='square' onClick={handleClick}></button>;
}

export function Board(){
  return (
  <>
    <div className="line">
      <Square />
      <Square />
      <Square />
    </div>
    <div className="line">
      <Square />
      <Square />
      <Square />
    </div>
    <div className="line">
      <Square />
      <Square />
      <Square />
    </div>
  </>
  )
}

function App() {
 
  
  return (
    <>
      <Board></Board>
     
    </>
  )
}

export default App
