import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export function Square({estado, setEstado}){
  return <button className='square' onClick={setEstado}>{estado}</button>;
}

export function Board(){

  const [estadoSquare, setEstadoSquare] = useState(Array(9).fill(""));
  const [jogadaAtual, setJogadaAtual] = useState("X");

  const alterarJogadaAtual = () => {
        setJogadaAtual(prev => prev === "X" ? "O" : "X")
    }


  const defineWinner = () => {
    const matrix = [[estadoSquare[0], estadoSquare[1], estadoSquare[2]], [estadoSquare[3], estadoSquare[4], estadoSquare[5]], [estadoSquare[6], estadoSquare[7], estadoSquare[8]]]

    for(let c = 0; c < 3; c++){
      if(matrix[c][0] === matrix[c][1] && matrix[c][1] === matrix[c][2] && matrix[c][0] != ""){
        return [true, matrix[c][0]]
      }

      if(matrix[0][c] === matrix[1][c] && matrix[c][1] === matrix[2][c] && matrix[0][c] != ""){
        return [true, matrix[0][c]]
      }
    }

    if((matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2] || matrix[2][0] == matrix[1][1] && matrix[1][1] == matrix[0][2]) && matrix[1][1] != ""){
      return [true, matrix[1][1]]
    }

    return [false, ""]

  }
    
  const onClickChange = (index, value) => {
      
    const novosValores = [...estadoSquare];
      
      if(novosValores[index] === ""){
        novosValores[index] = value;
        
        setEstadoSquare(novosValores)

        const res = defineWinner()
        if(res[0]){
          console.log(`${jogadaAtual} é vencedor`)
        }
        
        alterarJogadaAtual()

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
      <Board></Board>
     
    </>
  )
}

export default App
