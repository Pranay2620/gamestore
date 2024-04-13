import styled from "styled-components";

export const GameStyle = styled.article`
background-color: #333533;
  padding: 2rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  overflow: hidden;
  position: relative;

  p {
    color: #cfdbd5;
    font-size: 1.6rem;
  }

  h3 {
    color: #3b97d4;
    font-weight: 500;
    font-size: 1.8rem;
  }
  div {
    display: flex;
    gap: .6rem;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }
  input {
    text-align: center;
    background: none;
    border: none;
  }

  input#title {
    color: #3b97d4;
    font-weight: 500;
    font-size: 1.8rem;
  }

  input#company, input#price {
    color: #cfdbd5;
    font-size: 1.6rem;
  }

  input#price {
    opacity: 0.5;
  }

  input:focus {
    outline: none
  }
`