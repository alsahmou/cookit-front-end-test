/**
 * Asynchronously loads the component for Login
 */

import * as React from 'react';
import { lazyLoad } from 'utils/loadable';
import { LoadingIndicator } from 'app/components/LoadingIndicator';

export const Subscribe = lazyLoad(
  () => import('./index'),
  module => module.Subscribe,
  {
    fallback: <LoadingIndicator />,
  },
);
