import React, { useRef, useContext } from 'react';

import PropTypes from 'prop-types';
import {
  Container, CardBack, CardFront, InnerContainer,
} from './styles';
import { DIFFICULTIES_META } from '../../env';
import Context from '../../context';

export default function Card({
  data, showClickedCard, index, verifyCards, isWaitingAnimation,
}) {
  const ref = useRef(null);
  const { difficulty } = useContext(Context);
  const gameDifficulty = DIFFICULTIES_META[difficulty];

  function openCard() {
    if (!data.oppened && !isWaitingAnimation) {
      showClickedCard(index);
      verifyCards(data.name);
    }
  }

  return (
    <Container onClick={openCard} data={data} ref={ref} width={gameDifficulty.CARD_WIDTH}>
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
