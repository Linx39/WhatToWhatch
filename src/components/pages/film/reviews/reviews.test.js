import React from 'react';
import {render, screen} from '@testing-library/react';

import Reviews from './reviews';
import comments from '../../../../mock/comments';

it(`'Reviews' should render correctly`, () => {
  render(
      <Reviews comments={comments}/>
  );

  expect(screen.getByTestId(`test-col-0`)).toBeInTheDocument();
  expect(screen.getByTestId(`test-col-1`)).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${comments[0].comment}`, `i`))).toBeInTheDocument();
});
