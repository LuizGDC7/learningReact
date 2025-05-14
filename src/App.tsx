import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export function Square({estado, setEstado}){
  return <button className='square' onClick={setEstado}>{estado}</button>;
}

export function Board(){

  const [estadoSquare, setEstadoSquare] = useState(Array(9).fill(null));
  const [jogadaAtual, setJogadaAtual] = useState("X");
  const [vencedor, setVencedor] = useState(null)

  const alterarJogadaAtual = () => {
        setJogadaAtual(prev => prev === "X" ? "O" : "X")
    }

  const defineWinner = (squares) => {

    const matrix = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]
    ]

    for(const value of matrix){

      const val1 = squares[value[0]]
      const val2 = squares[value[1]]
      const val3 = squares[value[2]]  

      if(val1 !== null && val2 !== null && val3 !== null){
        if(val1 === val2 && val2 === val3){
          setVencedor(val1)
          break
        }
      }
      
  }
}
    
  const onClickChange = (index, value) => {
      
    if(vencedor !== null){
      console.log(`${vencedor} é o vencedor`)
    }else{

      const novosValores = [...estadoSquare];
        
        if(novosValores[index] === null){
          novosValores[index] = value;
          
          setEstadoSquare(novosValores)
  
          defineWinner(novosValores)
          
          alterarJogadaAtual()
        }
    }

  }
    
  return (
  <>
    <div className="line">
      <Square estado={estadoSquare[0]} setEstado={() => {onClickChange(0, jogadaAtual)}}/>
      <Square estado={estadoSquare[1]} setEstado={() => {onClickChange(1, jogadaAtual)}}/>
      <Square estado={estadoSquare[2]} setEstado={() => {onClickChange(2, jogadaAtual)}}/>
    </div>
    <div className="line">
      <Square estado={estadoSquare[3]} setEstado={() => {onClickChange(3, jogadaAtual)}}/>
      <Square estado={estadoSquare[4]} setEstado={() => {onClickChange(4, jogadaAtual)}}/>
      <Square estado={estadoSquare[5]} setEstado={() => {onClickChange(5, jogadaAtual)}}/>
    </div>
    <div className="line">
      <Square estado={estadoSquare[6]} setEstado={() => {onClickChange(6, jogadaAtual)}}/>
      <Square estado={estadoSquare[7]} setEstado={() => {onClickChange(7, jogadaAtual)}}/>
      <Square estado={estadoSquare[8]} setEstado={() => {onClickChange(8, jogadaAtual)}}/>
    </div>
  </>
  )
}

function App() {
 
  
  return (
    <>
      <div className='status'>$`{vencedor ? vencedor : ""}`</div>
      <Board></Board>
     
    </>
  )
}

export default App
