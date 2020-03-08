import React, { useEffect, useState, useContext } from 'react';

import { Container } from './styles';

import { CARDS, DIFFICULTIES_META, STATUS } from '../../env';

import { shuffle } from '../../utils/arraySuffle';
import Card from '../../components/Card';
import Timer from '../../components/Timer';
import Context from '../../context';
// import { Container } from './styles';

export default function Game() {
  const [cards, setCards] = useState([]);
  const [lastCard, setLastCard] = useState(null);
  const [isWaitingAnimation, setIsWaitingAnimation] = useState(false);
  const { difficulty, setStatus } = useContext(Context);
  const { finalResult } = useContext(Context);
  const gameDifficulty = DIFFICULTIES_META[difficulty];

  const generateCards = (initialArray) => {
    let cardsArray = [];
    // Embaralha todas as cartas
    cardsArray = shuffle(cardsArray.concat(initialArray));

    // retira algumas cartas baseadas nas quantidades por questão
    cardsArray = cardsArray.slice(0, gameDifficulty.CARDS);

    // inclui a flag isVisible e matched
    cardsArray = cardsArray.map((card) => ({ ...card, isVisible: false, matched: false }));

    // dupllica o array concatenando ele mesmo
    cardsArray = cardsArray.concat(cardsArray);
    // aplica uma nova embaralhada
    return shuffle(cardsArray);
  };

  useEffect(() => {
    // modifica o estado com um novo array embaralhado
    setCards(generateCards(CARDS));
  }, []);

  function timeOver() {
    finalResult(cards.filter((card) => card.matched).length / 2);
    setStatus(STATUS.TIME_IS_OVER);
  }


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
    const hasMatched = lastCard === cardName;

    const updatedCards = cards.map((card) => {
      let { isVisible, matched } = card;

      if ((cardName === lastCard && card.name === lastCard) || matched) {
        matched = true;
        isVisible = true;
      } else {
        isVisible = false;
      }

      return { ...card, isVisible, matched };
    });

    if (hasMatched) {
      setCards(updatedCards);
      setLastCard(null);
      return;
    }
    setIsWaitingAnimation(true);
    setTimeout(() => {
      setLastCard(null);
      setCards(updatedCards);
      setIsWaitingAnimation(false);
    }, 800);
  }

  return (
    <>
      <Timer timeOver={timeOver} />
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
    </>
  );
}
