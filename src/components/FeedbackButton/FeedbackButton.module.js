import styled from 'styled-components';

export const Button = styled.button`
  background-color: transparent;
  width: 130px;
  height: 44px;
  margin-left: 20px;
  font-size: 20px;
  line-height: 1.3;
  border-radius: 10px;

  :first-child {
    margin: 0px;
  }

  :hover {
    background-color: black;
    color: white;
  }
`;
