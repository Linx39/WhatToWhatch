import React from 'react';
import {screen} from '@testing-library/react';

import InfoPage from './info-page';
import {renderWithProviders} from '../../../test-utils/render-with-providers';

it(`InfoPage should render correctly`, () => {
  const infoText = `mock-infoText`;
  const linkTo = `mock-Path`;
  const linkText = `mock-linkText`;

  renderWithProviders(
      <InfoPage
        infoText={infoText}
        linkTo={linkTo}
        linkText={linkText}
      />);

  expect(screen.getByText(new RegExp(`${infoText}`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${linkText}`, `i`))).toBeInTheDocument();
});
