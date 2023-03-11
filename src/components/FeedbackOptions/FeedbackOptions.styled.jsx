import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: inherit;
  font-size: 16px;

  width: 150px;
  height: 40px;

  background-color: var(--accent-bg-color);
  color: var(--second-text-color);
  border: none;
  border-radius: 5px;

  cursor: pointer;
  transition: background-color var(----main-animation-hover);

  &:hover,
  &:focus {
    background-color: var(--second-bg-color);
  }
`;
