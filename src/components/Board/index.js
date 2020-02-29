import React, { useEffect, useState } from 'react';

import Card from '../Card';

import { Container } from './styles';

import { CARDS } from '../../env';

import { shuffle } from '../utils/arraySuffle';

export default function Board() {
  const [cards, setCards] = useState([]);
  const [lastCard, setLastCard] = useState(null);
  const [isWaitingAnimation, setIsWaitingAnimation] = useState(false);

  useEffect(() => {
    let cardsArray = [];
    // transfere o array de cartas a uma variavel auxiliar
    cardsArray = cardsArray.concat(CARDS);
    // inclui a flag isVisible
    cardsArray.map((card) => ({ ...card, isVisible: false }));

    // dupllica o array concatenando ele mesmo
    cardsArray = cardsArray.concat(cardsArray);
    // modifica o estado com um novo array embaralhado
    setCards(shuffle(shuffle(cardsArray)));
  }, []);


  function showClickedCard(cardIndex) {
    const updatedCards = cards.map((card, index) => {
      let { isVisible } = card;
      if (cardIndex === index) {
        isVisible = true;
      }
      return { ...card, isVisible };
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
      let { isVisible } = card;
      if (cardName === card.name || card.name === lastCard) {
        isVisible = false;
      }
      return { ...card, isVisible };
    });
    setIsWaitingAnimation(true);

    setTimeout(() => {
      setLastCard(null);
      setCards(updatedCards);
      setIsWaitingAnimation(false);
    }, 800);
  }

  return (
    <Container>

      {
        cards.map((card, index) => (
          <Card
            data={card}
            index={index}
            showClickedCard={showClickedCard}
            verifyCards={verifyCards}
            isWaitingAnimation={isWaitingAnimation}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
          />
        ))
      }


    </Container>
  );
}
