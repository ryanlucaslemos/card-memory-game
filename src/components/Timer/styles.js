import styled from 'styled-components';
import { CardStyle } from '../../global-styles';

export const Container = styled.div`
  ${CardStyle}
  display: flex;
  flex: 1;
  width: 100%;
  padding: 20px 20px;
  justify-content: center;
  background: #fff;
`;

export const Timer = styled.div`
font-size: 40px;
font-weight: bold;
`;
