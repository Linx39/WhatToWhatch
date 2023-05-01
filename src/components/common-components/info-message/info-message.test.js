import React from 'react';
import {render, screen} from '@testing-library/react';

import InfoMessage from './info-message';

it(`InfoMessage should render correctly`, () => {
  const fakeText = `fake text`;

  render(
      <InfoMessage text={fakeText} />
  );

  expect(screen.getByText(new RegExp(`${fakeText}`, `i`))).toBeInTheDocument();
});
