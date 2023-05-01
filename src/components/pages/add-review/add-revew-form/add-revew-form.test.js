import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import AddReviewForm from './add-revew-form';
import {mockFilms} from '../../../../mock/mock-films';

const mockStore = configureStore({});

it(`AddReviewForm should render correctly`, () => {
  const mockFilm = mockFilms[5];

  render(
      <Provider store={mockStore({})}>
        <AddReviewForm film={mockFilm}/>
      </Provider>
  );

  expect(screen.getByText(/Post/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Review text/i)).toBeInTheDocument();
});
