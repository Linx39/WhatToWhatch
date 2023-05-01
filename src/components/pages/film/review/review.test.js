import React from 'react';
import {render, screen} from '@testing-library/react';

import Review from './review';

it(`Review should render correctly`, () => {
  const filmComment =
    {id: 1,
      user: {id: 1, name: `fake-user-1`},
      rating: 8.9,
      comment: `fake-comment-1`,
      date: `2016-12-24`
    };
  const {comment, user, rating} = filmComment;

  render(
      <Review filmComment={filmComment}/>
  );

  expect(screen.getByText(new RegExp(`${comment}`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${user.name}`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${rating}`, `i`))).toBeInTheDocument();
});
