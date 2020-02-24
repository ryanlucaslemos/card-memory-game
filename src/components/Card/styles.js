import styled from 'styled-components';

export const Container = styled.div`
  border: none;
  background: ${(props) => (props.data.oppened ? '#f18867' : '#50bda1')};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  margin-bottom: 10px;
  height: 15vh;
  width: 15vw;
`;
