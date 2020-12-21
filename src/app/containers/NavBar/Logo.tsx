import * as React from 'react';
import styled from 'styled-components/macro';
import { translations } from 'locales/translations';
import { useTranslation } from 'react-i18next';
// import { _t } from 'utils/messages';

export function Logo() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Title>{t(translations.navbar.logo.title)}</Title>
      <Description>{t(translations.navbar.logo.description)}</Description>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 1.25rem;
  color: ${p => p.theme.text};
  font-weight: bold;
  margin-right: 1rem;
`;

const Description = styled.div`
  font-size: 0.875rem;
  color: ${p => p.theme.textSecondary};
  font-weight: normal;
`;
