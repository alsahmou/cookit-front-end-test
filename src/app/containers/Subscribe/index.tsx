import * as React from 'react';
import styled from 'styled-components/macro';
import { NavBar } from 'app/containers/NavBar';
import { Helmet } from 'react-helmet-async';
import { StyleConstants } from 'styles/StyleConstants';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';

import { FormLabel } from 'app/components/FormLabel';
import { Input } from 'app/components/Input';
import { Button } from 'app/components/Button';
import { useForm } from 'react-hook-form';

import { isValidEmail, isValidPostalCode } from '../../../utils/validation';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export function Subscribe() {
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = event => {
    let email = event['email'];
    let postalCode = event['postalCode'];
    if (email.length != 0) {
      if (!isValidEmail(email)) {
        alert(t(translations.subscribe.form.incorrectEmail));
      } else if (postalCode.length != 0) {
        if (!isValidPostalCode(postalCode)) {
          alert(t(translations.subscribe.form.incorrectPostalCode));
        } else {
          axios({
            method: 'POST',
            url:
              'https://s9g64p6vzb.execute-api.us-east-1.amazonaws.com/default/interview-is-zip-valid',
            data: {
              zip: postalCode,
            },
          })
            .then(response => {
              let isDeliverable = response['data']['is_deliverable'];
              if (!isDeliverable) {
                alert(t(translations.subscribe.form.undeliverablePostalCode));
              } else {
                history.push('/confirmation', {
                  params: { email, postalCode },
                });
              }
            })
            .catch(error => {
              console.log(error);
            });
        }
      } else {
        alert(t(translations.subscribe.form.emptyPostalCode));
      }
    } else {
      alert(t(translations.subscribe.form.emptyEmail));
    }
  };

  return (
    <>
      <Helmet>
        <title></title>
        <meta name="description" content="" />
      </Helmet>
      <NavBar />
      <Wrapper>
        <h1>{t(translations.subscribe.title)}</h1>
        <Form id="subscribe-form">
          <FormLabel htmlFor="email">
            {t(translations.subscribe.form.email)}
          </FormLabel>
          <Input type="text" name="email" ref={register} />
          <FormLabel htmlFor="postalCode">
            {t(translations.subscribe.form.postalCode)}
          </FormLabel>
          <Input type="text" name="postalCode" ref={register} />
          <Button type="submit" onClick={handleSubmit(onSubmit)}>
            {t(translations.subscribe.form.submit)}
          </Button>
        </Form>
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
