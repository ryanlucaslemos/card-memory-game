import React, { useEffect, useState } from 'react';

import Card from '../Card';

import { Container } from './styles';

import { CARDS } from '../../env';

import { shuffle } from '../utils/arraySuffle';

export default function Board() {
  const [cards, setCards] = useState([]);
  const [lastCard, setLastCard] = useState(null);

  useEffect(() => {
    let cardsArray = [];
    // transfere o array de cartas a uma variavel auxiliar
    cardsArray = cardsArray.concat(CARDS);
    // inclui a flag oppened
    cardsArray.map((card) => ({ ...card, oppened: false }));

    // dupllica o array concatenando ele mesmo
    cardsArray = cardsArray.concat(cardsArray);
    // modifica o estado com um novo array embaralhado
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

  function verifyCards(cardName) {
    if (!lastCard) {
      setLastCard(cardName);
      return;
    }

    if (lastCard === cardName) {
      setLastCard(null);
      return;
    }

    const updatedCards = cards.map((card) => {
      let { oppened } = card;
      if (cardName === card.name || card.name === lastCard) {
        oppened = false;
      }
      return { ...card, oppened };
    });

    setTimeout(() => {
      setCards(updatedCards);
      setLastCard(null);
    }, 800);
  }

  return (
    <Container>

      {
        cards.map((card, index) => (
          <Card
            data={card}
            index={index}
            changeOppened={changeOppened}
            verifyCards={verifyCards}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
          />
        ))
      }


    </Container>
  );
}
