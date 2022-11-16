import styled from 'styled-components';

export const FormWrap = styled.div`
  max-width: 300px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  margin: 10px 0;
  padding: 5px;
`;

export const Label = styled.label`
display: flex;
flex-direction: column;
margin-top: 10px;
margin-bottom: 15px;
font-size: 20px;
`;

export const Input = styled.input`
border: 1px solid lightgray;
padding: 5px;
width: 200px;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 100px;
  background-color: white;
  border: 1px solid lightgray;
  &:hover {
    background-color: lightblue;
  }
`;