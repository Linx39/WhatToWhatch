import React from 'react';
import {render, screen} from '@testing-library/react';

import Reviews from './reviews';
// import comments from '../../../../mock/comments';

it(`Reviews should render correctly`, () => {
  const comments = [
    {id: 1,
      user: {id: 1, name: `fake-user-1`},
      rating: 8.9,
      comment: `fake-comment-1`,
      date: `2016-12-24`
    },
    {id: 2,
      user: {id: 2,name: `fake-user-2`},
      rating: 8.0,
      comment: `fake-comment-2`,
      date: `2015-11-18`
    },
    {id: 3,
      user: {id: 3,
        name: `fake-user-3`},
      rating: 7.1,
      comment: `fake-comment-3`,
      date: `2015-11-18`
    },
  ];

  render(
      <Reviews comments={comments}/>
  );

  expect(screen.getByTestId(`test-col-0`)).toBeInTheDocument();
  expect(screen.getByTestId(`test-col-1`)).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${comments[0].comment}`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${comments[1].comment}`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${comments[3].comment}`, `i`))).toBeInTheDocument();
});
