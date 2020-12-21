import * as React from 'react';
import { NotFoundPage } from '..';
import { createRenderer } from 'react-test-renderer/shallow';

const shallowRenderer = createRenderer();

describe('<NotFoundPage />', () => {
  it('should render and match the snapshot', () => {
    shallowRenderer.render(<NotFoundPage />);
    const renderedOutput = shallowRenderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
