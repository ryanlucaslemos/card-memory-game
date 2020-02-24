import React from 'react';

import PropTypes from 'prop-types';
import { Container } from './styles';


export default function Card({ data, changeOppened, index }) {
  function openCard() {
    changeOppened(index);
  }
  return (
    <Container onClick={openCard} data={data}>
      {data.oppened
        && <data.component size="5em" />}
    </Container>
  );
}

Card.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  changeOppened: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
