import React, { useState } from 'react';

import GlobalStyle from './global-styles';

import Game from './pages/Game';
import Start from './pages/Start';
import Score from './pages/Score';
import Context from './context';
import { STATUS } from './env';

function App() {
  const [difficulty, setDifficulty] = useState(null);
  const [status, setStatus] = useState(STATUS.NOT_STARTED);
  const [score, setScore] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const render = () => {
    if (status === STATUS.NOT_STARTED) {
      return <Start />;
    }

    if (status === STATUS.STARTED) {
      return <Game />;
    }

    return <Score score={score} isWinner={status === STATUS.FINISHED} />;
  };

  const finalResult = (gameScore) => {
    setScore(gameScore);
  };

  return (
    <>
      <Context.Provider value={{
        difficulty,
        setDifficulty,
        status,
        setStatus,
        setScore,
        finalResult,
        timeLeft,
        setTimeLeft,
      }}
      >
        {render()}

        <GlobalStyle />
      </Context.Provider>

    </>
  );
}

export default App;
