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

export const Select = styled.select`
  ${CardStyle}
  width: 100%;
  flex: 1;
  text-align: center;
  padding: 10px;
  margin-bottom: 60px;
  margin-top: 5px;
  background: #f18867;
  color: #fff;
`;

export const Label = styled.label`
font-size: 25px;
color: #f18867;

`;

export const Button = styled.button`
${CardStyle}
width: 100%;
padding: 20px;

background: #50bda1;
color: #fff;
cursor: pointer;

:hover {
  opacity: 0.94;
}
`;
