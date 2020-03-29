import styled from 'styled-components';
import { CardStyle } from '../../global-styles';

export const Select = styled.select`
  ${CardStyle}
  width: 100%;
  flex: 1;
  text-align: center;
  padding: 15px;
  margin-bottom: 30px;
  margin-top: 5px;
  background: #f18867;
  color: #fff;
  font-size: 18px;

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
