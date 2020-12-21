import * as React from 'react';
import { Subscribe } from '..';
import { createRenderer } from 'react-test-renderer/shallow';
import { isValidEmail, isValidPostalCode } from '../../../../utils/validation';

const shallowRenderer = createRenderer();

describe('<Subscribe />', () => {
  it('should render and match the snapshot', () => {
    shallowRenderer.render(<Subscribe />);
    const renderedOutput = shallowRenderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });

  it('should return true for a valid email', () => {
    expect(isValidEmail('alisahmoud@hotmail.com')).toBeTruthy();
  });

  it('should return true for an invalid email', () => {
    expect(isValidEmail('alisahmoud.com')).toBeFalsy();
  });

  it('should return true for a valid postal code', () => {
    expect(isValidPostalCode('A1A1A1')).toBeTruthy();
  });

  it('should return false for an invalid postal code', () => {
    expect(isValidPostalCode('A1A1aA1')).toBeFalsy();
  });
});
