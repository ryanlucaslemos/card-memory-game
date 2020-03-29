/* eslint-disable react/prop-types */
import React, { useContext } from 'react';

import Context from '../../context';

import { DIFFICULTIES_META } from '../../env';

import StartForm from '../../components/StartForm';
import {
  Container, Title, FinalResult, ScoreText, Content, Grid,
  Line,
} from './styles';

export default function Score({ score, isWinner }) {
  const {
    difficulty,
  } = useContext(Context);
  const gameDifficulty = DIFFICULTIES_META[difficulty];

  return (
    <Container>
      <Content>
        <Grid>
          <Title>
            Seu Resultado:
          </Title>
          <FinalResult>
            {isWinner ? 'Parabéns Você venceu!!!' : 'Tempo esgotado!!!'}
          </FinalResult>
          <Line />
          <ScoreText>
            Dificuldade:
            <span>
              {gameDifficulty.NAME}
            </span>
          </ScoreText>
          <ScoreText>
            Cartas encontradas:
            <span>
              {score.cardsMatched}
              {' '}
              de
              {' '}
              {gameDifficulty.CARDS}
            </span>
          </ScoreText>

          <ScoreText>
            Tempo Restante:
            <span>
              {score.timeLeft}
              {' '}
              de
              {' '}
              {gameDifficulty.TIME}
              {' '}
              segundos
            </span>

          </ScoreText>
        </Grid>
        <Grid>
          <Title>Reiniciar Jogo</Title>
          <StartForm />
        </Grid>

      </Content>


    </Container>
  );
}
