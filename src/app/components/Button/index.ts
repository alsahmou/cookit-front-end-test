import styled from 'styled-components/macro';

export const Button = styled.button`
  color: ${p => p.theme.primary};
  border-color: ${p => p.theme.border};
  border-radius: 10px;
  padding: 5px;
  background-color: transparent;
  transition: 300ms;

  &:hover {
    background-color: ${p => p.theme.border};
  }

  &:active {
    background-color: ${p => p.theme.border};
  }
`;
