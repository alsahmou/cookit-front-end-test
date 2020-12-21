import * as React from 'react';
import { render } from '@testing-library/react';

import { Button } from '../index';
import { themes } from 'styles/theme/themes';
import { DefaultTheme } from 'styled-components';

const renderWithTheme = (theme?: DefaultTheme) =>
  render(<Button theme={theme || themes.light} />);

describe('<Button />', () => {
  it('should render an <button> tag', () => {
    const a = renderWithTheme();
    expect(a.container.querySelector('button')).toBeInTheDocument();
  });

  it('should have theme', () => {
    const a = renderWithTheme();
    expect(a.container.firstChild).toHaveStyle(
      `color: ${themes.light.primary}`,
    );
  });
});
