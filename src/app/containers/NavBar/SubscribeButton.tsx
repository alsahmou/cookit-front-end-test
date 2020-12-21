import * as React from 'react';
import { translations } from 'locales/translations';
import { useTranslation } from 'react-i18next';
import { useNavigation } from 'app/controllers/navigation';

import { Button } from '../../components/Button';

export function SubscribeButton() {
  const { t } = useTranslation();
  const { navigateTo } = useNavigation();

  return (
    <Button onClick={() => navigateTo('subscribe')}>
      {t(translations.navbar.subscribeButton.text)}
    </Button>
  );
}
