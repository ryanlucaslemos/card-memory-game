import React, { useState } from 'react';

import GlobalStyle from './global-styles';

import Game from './pages/Game';
import Start from './pages/Start';
import Context from './context';
import { STATUS } from './env';

function App() {
  const [difficulty, setDifficulty] = useState(null);
  const [status, setStatus] = useState(STATUS.NOT_STARTED);
  // eslint-disable-next-line prefer-const
  const [combinatedCards, setCombinatedCards] = useState(0);
  const render = () => {
    if (status === STATUS.NOT_STARTED) {
      return <Start />;
    }

    if (status === STATUS.STARTED) {
      return <Game />;
    }
    return null;
  };

  const finalResult = (result) => {
    setCombinatedCards(result);
  };

  return (
    <>
      <Context.Provider value={{
        difficulty, setDifficulty, status, setStatus, combinatedCards, finalResult,
      }}
      >
        {render()}

        <GlobalStyle />
      </Context.Provider>

    </>
  );
}

export default App;
