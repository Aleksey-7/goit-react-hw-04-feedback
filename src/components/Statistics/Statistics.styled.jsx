import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Text = styled.p`
  font-size: 25px;
  font-weight: 600;
  text-transform: capitalize;
`;

export const Value = styled.span`
  color: var(--accent-bg-color);
`;
