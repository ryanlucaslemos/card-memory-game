import React from 'react';

import {
  Container, ContentBox,
} from './styles';

import StartForm from '../../components/StartForm';

export default function Start() {
  return (
    <Container>
      <ContentBox>
        <StartForm />
      </ContentBox>

    </Container>
  );
}
