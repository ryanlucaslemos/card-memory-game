import React, { useState, useEffect, useContext } from 'react';

import { Container, Timer as StyledTimer } from './styles';
import Context from '../../context';
import { DIFFICULTIES_META } from '../../env';

// eslint-disable-next-line react/prop-types
export default function Timer({ timeOver }) {
  const { difficulty } = useContext(Context);
  const [time, setTime] = useState(DIFFICULTIES_META[difficulty].TIME);

  useEffect(() => {
    const interval = setInterval(() => {
      if (time === 0) {
        timeOver();
        return;
      } setTime(time - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  function pad(num) {
    return (`0${num}`).slice(-2);
  }
  const getTimeFormatted = () => {
    const minutes = pad(time % 60 === 0 ? time / 60 : 0);
    const seconds = pad(time % 60);
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
