import React, { useRef } from 'react';

import PropTypes from 'prop-types';
import {
  Container, CardBack, CardFront, InnerContainer,
} from './styles';


export default function Card({
  data, showClickedCard, index, verifyCards, isWaitingAnimation,
}) {
  const ref = useRef(null);

  function openCard() {
    if (!data.oppened && !isWaitingAnimation) {
      showClickedCard(index);
      verifyCards(data.name);
    }
  }

  return (
    <Container onClick={openCard} data={data} ref={ref}>
      <InnerContainer data={data}>
        <CardFront />
        <CardBack>
          <data.component size="5em" />
        </CardBack>
      </InnerContainer>
    </Container>
  );
}

Card.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  showClickedCard: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  verifyCards: PropTypes.func.isRequired,
  isWaitingAnimation: PropTypes.bool.isRequired,
};
