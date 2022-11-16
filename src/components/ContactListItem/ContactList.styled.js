import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  border: 2px solid lightgray;
  border-radius: 4px;
  justify-content: space-between;
  padding: 5px;
  width: 300px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  margin-left: 10px;
  background-color: white;
  border: 1px solid lightgray;
  &:hover {
    background-color: lightblue;
  }
`;