import * as React from 'react';
import styled from 'styled-components/macro';
import { NavBar } from 'app/containers/NavBar';
import { Helmet } from 'react-helmet-async';
import { StyleConstants } from 'styles/StyleConstants';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';
import { useHistory, useLocation } from 'react-router-dom';
import { useNavigation } from 'app/controllers/navigation';

export function Confirm() {
  const { t } = useTranslation();
  const location: any = useLocation();
  const { navigateTo } = useNavigation();
  // In case the user directly goes to /confirmation URL, they are redirected to subscribe page
  // and location.state and location.state.params is initialized with empty values to prevent crashes
  if (!location.state) {
    navigateTo('subscribe');
    location.state = {};
    location.state.params = { email: '', postalCode: '' };
  }
  const history: any = useHistory();
  const userParams: any = location.state.params;

  return (
    <>
      <Helmet>
        <title></title>
        <meta name="description" content="" />
      </Helmet>
      <NavBar />
      <Wrapper>
        <h1>{t(translations.confirmation.title)}</h1>
        <h4>
          {t(translations.confirmation.body.email)}
          {userParams.email}
        </h4>
        <h4>
          {t(translations.confirmation.body.postalCode)}
          {userParams.postalCode}
        </h4>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: calc(100vh - ${StyleConstants.NAV_BAR_HEIGHT});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
`;

const Form = styled.div`
  height: calc(100vh - ${StyleConstants.NAV_BAR_HEIGHT});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
`;
