import styled from 'styled-components';

import { Container as StartContainer, ContentBox } from '../Start/styles';


export const Container = styled(StartContainer)`
    
`;

export const Content = styled(ContentBox)`
  height: auto;
  padding: 40px;
  div + div {
    padding-left:15px;
    padding-bottom: 20px; 
    margin-left: 15px;
    border-left: 2px solid #949494;
  }
`;

export const Grid = styled.div`
  flex-direction: column;
  height: auto;


`;

export const Title = styled.h2`
  margin-bottom: 15px;
  font-size: 35px;
  color: #f18867;

`;

export const Line = styled.hr`
  background: #515151;
  width: 20vw;
  height: 3px;
  margin-top: 10px;
  margin-bottom: 20px;
`;
export const FinalResult = styled(Title)`
  font-size: 28px;
`;

export const ScoreText = styled.h3`
  font-size: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #50bda1;
  span {
    margin-left: 5px;
    font-size: 20px;
    color: #515151;
    font-weight: bold;
  }
`;
