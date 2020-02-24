import styled from 'styled-components';

export const Container = styled.div`

  background-color: transparent;
  perspective: 1000px;

  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  color: #fff;
  margin-bottom: 10px;
  height: 15vh;
  width: 15vw;
`;

export const InnerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  ${(props) => (props.data.oppened ? 'transform: rotateY(180deg);' : '')}
`;

export const CardSides = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
`;

export const CardFront = styled(CardSides)`
  background: #50bda1;
`;

export const CardBack = styled(CardSides)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f18867;
  transform: rotateY(180deg);
`;
