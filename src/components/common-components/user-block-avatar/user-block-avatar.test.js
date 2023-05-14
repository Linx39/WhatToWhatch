import React from 'react';
import {screen} from '@testing-library/react';

import UserBlockAvatar from './user-block-avatar';
import {renderWithProviders} from '../../../test-utils/render-with-providers';
import {mockStateUserAutch} from '../../../test-utils/mock-state';

it(`UserBlockAvatar should render correctly`, () => {
  renderWithProviders(
      <UserBlockAvatar />,
      mockStateUserAutch
  );

  expect(screen.getByAltText(/User avatar/i)).toBeInTheDocument();
});
