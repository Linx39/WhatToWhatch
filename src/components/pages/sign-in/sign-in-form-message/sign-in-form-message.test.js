import React from 'react';
import {render, screen} from '@testing-library/react';

import SignInFormMessage from './sign-in-form-message';

it(`SignInFormMessage should render correctly`, () => {
  const fakeText = `fake text`;

  render(
      <SignInFormMessage text={fakeText} />
  );

  expect(screen.getByText(new RegExp(`${fakeText}`, `i`))).toBeInTheDocument();
});
