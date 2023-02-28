import React from 'react';
import {render, screen} from '@testing-library/react';

import Copyright from './copyright';

it(`Copyright should render correctly`, () => {
  render(
      <Copyright />
  );

  expect(screen.getByText(/© 2019 What to watch Ltd./i)).toBeInTheDocument();
});
