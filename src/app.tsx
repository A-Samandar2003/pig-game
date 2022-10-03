import { useState } from 'react';
import Controls from './components/controls/controls';
import './app.css';


function App() {
  const [player, setPlayer] = useState(0);
  const [score, setScore] = useState(1);
  const [currentScore, setCurrentScore] = useState(0);
  const [scores, setSCores] = useState([0, 0]);

  const switchPlayer = () => {
    setPlayer(player === 0 ? 1 : 0);
    scores[player] += currentScore;
    setCurrentScore(0)
  }
  const resetGame = () => {
    setSCores([0, 0]);
    setCurrentScore(0);
  }

  const rollDIce = () => {

    let dice = Math.trunc(Math.random() * 6) + 1;

    if (dice !== 1) {
      setCurrentScore(currentScore + dice);
      setScore(dice)

    }
    else if (scores[player] > 30) {
      alert(`winner ${player}`)
      resetGame()
    }
    else {
      setPlayer(player === 0 ? 1 : 0);
      scores[player] += currentScore;
      setCurrentScore(0)
    }
  }

  return (
    <div className="wrapper">
      <div className={`player player--0 ${player ? 'player--active' : ''}`} >
        <h2 className='name'>Player 0</h2>
        <p className='score'>{scores[0]}</p>
        <div className="current">
          <p className="current-label">
            Current
          </p>
          <p className="current-score" id='current--0'>
            {player === 0 ? currentScore : 0}
          </p>
        </div>
      </div>
      <div className={`player player--1 ${player ? '' : 'player--active'}`}>
        <h2 className='name'>Player 1</h2>
        <p className='score'>{scores[1]}</p>
        <div className="current">
          <p className="current-label">
            Current
          </p>
          <p className="current-score" id='current--1'>
            {player === 1 ? currentScore : 0}
          </p>
        </div>
      </div>
      <img src={`https://pig-game-v2.netlify.app/dice-${score}.png`} alt="Playing dice" className="dice" />
      <Controls resetGame={resetGame} rollDIce={rollDIce} switchPlayer={switchPlayer} />
    </div >
  );
}

export default App;
