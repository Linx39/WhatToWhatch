import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import Reviews from './reviews';
import {mockFilms} from '../../../../mock/mock-films';

const mockStore = configureStore({});

jest.mock(`react-redux`, () => ({
  ...jest.requireActual(`react-redux`),
  useDispatch: jest.fn(() => () => {})
}));

it(`Reviews should render correctly`, () => {
  const mockFilm = mockFilms[2];
  const mockComments = [
    {id: 1,
      user: {id: 1, name: `fake-user-1`},
      rating: 8.9,
      comment: `fake-comment-1`,
      date: `2016-12-24`
    },
    {id: 2,
      user: {id: 2, name: `fake-user-2`},
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

  const store = mockStore({
    DATA: {
      filmData: {data: mockFilm, isLoading: false, error: null},
      commentsData: {data: mockComments, isLoading: false, error: null}
    },
  });

  render(
      <Provider store={store}>
        <Reviews film={mockFilm}/>
      </Provider>
  );

  expect(screen.getByTestId(`test-col-0`)).toBeInTheDocument();
  expect(screen.getByTestId(`test-col-1`)).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${mockComments[0].comment}`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${mockComments[1].comment}`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${mockComments[2].comment}`, `i`))).toBeInTheDocument();
});
