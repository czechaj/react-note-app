import styled from "styled-components";

const Button = styled.button`
  font-size: 1rem;
  letter-spacing: 0.1rem;
  background-color: #112b3c;
  color: #f7f5f2;
  padding: 0.6rem 0.9rem;
  border: none;
  border-radius: 4px;
  transition: 0.2s all;
  cursor: pointer;
  &:hover {
    color: #112b3c;
    border: 1px solid #112b3c;
    background-color: transparent;
  }
  &:active {
    transform: scale(0.96);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
`;

export default Button;
