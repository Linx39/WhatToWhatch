import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import userEvent from '@testing-library/user-event';

import Review from './review';
import filmComments from '../../../mock/comments';

it(`'Review' should render correctly`, () => {
  const filmComment = filmComments[0];
  const {comment, user, rating} = filmComment;
  const history = createMemoryHistory();

  render(
      <Router history={history}>
        <Review filmComment={filmComment}/>
      </Router>
  );

  expect(screen.getByText(new RegExp(`${comment}`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${user.name}`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${rating}`, `i`))).toBeInTheDocument();
});
