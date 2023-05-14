import React from 'react';
import {render, screen} from '@testing-library/react';

import Review from './review';
import {mockComment} from '../../../../test-utils/test-data';

it(`Review should render correctly`, () => {
  const {comment, user, rating} = mockComment;

  render(
      <Review filmComment={mockComment}/>
  );

  expect(screen.getByText(new RegExp(`${comment}`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${user.name}`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${rating}`, `i`))).toBeInTheDocument();
});
