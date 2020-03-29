import React, { useEffect, useContext } from 'react';

import { Container, Timer as StyledTimer } from './styles';
import Context from '../../context';
import { DIFFICULTIES_META } from '../../env';

// eslint-disable-next-line react/prop-types
export default function Timer({ timeOver }) {
  const { difficulty, timeLeft, setTimeLeft } = useContext(Context);

  useEffect(() => {
    setTimeLeft(DIFFICULTIES_META[difficulty].TIME);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft === 0) {
        timeOver();
        return;
      }
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  function pad(num) {
    return (`0${num}`).slice(-2);
  }
  const getTimeFormatted = () => {
    const minutes = pad(timeLeft % 60 === 0 ? timeLeft / 60 : 0);
    const seconds = pad(timeLeft % 60);
    return `${minutes}:${seconds}`;
  };


  return (
    <Container>
      <StyledTimer>
        {getTimeFormatted()}
      </StyledTimer>
    </Container>
  );
}
