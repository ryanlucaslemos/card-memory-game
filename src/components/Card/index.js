import React, { useRef } from 'react';

import PropTypes from 'prop-types';
import {
  Container, CardBack, CardFront, InnerContainer,
} from './styles';


export default function Card({ data, changeOppened, index }) {
  const ref = useRef(null);
  function openCard() {
    changeOppened(index);
  }


  return (
    <Container onClick={openCard} ref={ref}>
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
  changeOppened: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
