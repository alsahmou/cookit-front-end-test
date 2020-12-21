import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import i18next from 'i18next';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import { LanguageSwitch } from '..';
import { themes } from 'styles/theme/themes';
import { i18n } from 'locales/i18n';
import { translations } from 'locales/translations';

const renderLanguageSwitch = (theme?: DefaultTheme) =>
  render(
    <ThemeProvider theme={theme || themes.light}>
      <LanguageSwitch />
    </ThemeProvider>,
  );
describe('<LanguageSwitch />', () => {
  it('should have 2 radio buttons', () => {
    const languageSwitch = renderLanguageSwitch();
    expect(languageSwitch.queryAllByRole('radio').length).toBe(2);
  });

  it('should change language on click', async () => {
    i18next.changeLanguage('en');
    const languageSwitch = renderLanguageSwitch();
    const radio2 = languageSwitch.queryAllByRole('radio')[1];
    fireEvent.click(radio2);
    expect(i18next.language).toEqual('fr');
  });
});
