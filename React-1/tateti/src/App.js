import {useState} from 'react';
import './App.css';
import Board from './components/Board.js/Board';

const winningPositions = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];



const App = () => {

  const [turn, setTurn] = useState('X'); 
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [winningSquares, setWinningSquares] = useState([])
  const [score, setScore] = useState({
    x: 0,
    o: 0,
  });

// const [state, setState] = useState({
//   turn: 'x',
//   squares: 'Array(9).fill(null)',
//   winningSquares: '[]',
//   score: '{x: 0, o: 0}'
// })

  const reset = () => {
    setTurn('X');
    setSquares(Array(9).fill(null));
    setWinningSquares([])
  }

  const checkForWinner = newSquares => {
    setTurn(turn === 'X' ? 'O' : 'X');
    for(let i = 0; i < winningPositions.length; i++){
      const [a,b,c] = winningPositions[i]
      if(newSquares[a] && newSquares[a] === newSquares[b] && newSquares[a] === newSquares[c]){
        endGame(newSquares[a], winningPositions[i]);
        alert('¡Hay un ganador!');
        return;
      }
      if(!newSquares.includes(null)){
        alert('¡Hay un empate!')
        endGame(null, Array.from(Array(10).keys()));
        return;
      }
    }

  }

  const handleClick = square => {
    let newSquares = [...squares];
    newSquares.splice(square, 1, turn);
    setSquares(newSquares);
    checkForWinner(newSquares)
  };

  const endGame = (result, winningPositions) => {
    setTurn(null);
    setScore({
      ...score,
      [result]: score[result] + 1,
    })
    setWinningSquares(winningPositions);
    
  }

  return (
    <div className="container">
      <Board winningSquares={winningSquares} turn={turn} squares={squares} onClick={handleClick} />
      <button id="reboot" onClick={reset}>Reiniciar</button>
    </div>
  );
}

export default App;
