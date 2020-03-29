import styled from 'styled-components';
import { CardStyle } from '../../global-styles';


export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  height: 100vh;
`;


export const ContentBox = styled.div`
  ${CardStyle}
  width: 50vw;
  height: 40vh;
  background: #fff;
  padding: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
