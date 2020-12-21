import * as React from 'react';
import { render } from '@testing-library/react';

import { Input } from '../index';
import { themes } from 'styles/theme/themes';
import { DefaultTheme } from 'styled-components';

const renderWithTheme = (theme?: DefaultTheme) =>
  render(<Input theme={theme || themes.light} />);

describe('<Input />', () => {
  it('should render an <input> tag', () => {
    const label = renderWithTheme();
    expect(label.container.querySelector('input')).toBeInTheDocument();
  });

  it('should have theme', () => {
    const a = renderWithTheme();
    expect(a.container.firstChild).toHaveStyle(
      `color: ${themes.light.textSecondary}`,
    );
  });
});
