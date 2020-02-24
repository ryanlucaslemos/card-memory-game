import React, { useEffect, useState } from 'react';

import Card from '../Card';

import { Container } from './styles';

import { CARDS } from '../../env';

import { shuffle } from '../utils/arraySuffle';

export default function Board() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    let cardsArray = [];
    cardsArray = cardsArray.concat(CARDS);
    cardsArray.map((card) => ({ ...card, oppened: false }));

    cardsArray = cardsArray.concat(cardsArray);
    setCards(shuffle(cardsArray));
  }, []);

  function changeOppened(cardIndex) {
    const updatedCards = cards.map((card, index) => {
      let { oppened } = card;
      if (cardIndex === index) {
        oppened = true;
      }
      return { ...card, oppened };
    });
    setCards(updatedCards);
  }

  return (
    <Container>

      {
        cards.map((card, index) => (
          <Card
            data={card}
            index={index}
            changeOppened={changeOppened}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
          />
        ))
      }


    </Container>
  );
}
