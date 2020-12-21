import styled from 'styled-components/macro';

export const Input = styled.input`
  text-transform: uppercase;
  font-weight: normal;
  margin: 0;
  padding: 0;
  color: ${p => p.theme.textSecondary};
  font-size: 1rem;
  min-width: 500px;
  margin-bottom: 15px;
`;
