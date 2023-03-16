import React from 'react';
import {render, screen} from '@testing-library/react';

import Review from './review';
import filmComments from '../../../mock/comments';

it(`Review should render correctly`, () => {
  const filmComment = filmComments[0];
  const {comment, user, rating} = filmComment;
  render(
      <Review filmComment={filmComment}/>
  );

  expect(screen.getByText(new RegExp(`${comment}`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${user.name}`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${rating}`, `i`))).toBeInTheDocument();
});
