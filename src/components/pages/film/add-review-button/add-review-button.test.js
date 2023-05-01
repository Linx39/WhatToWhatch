import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import AddReviewButton from './add-review-button';
import {mockFilms} from '../../../../mock/mock-films';

const mockStore = configureStore({});

it(`AddReviewButton should render correctly`, () => {
  const mockFilm = mockFilms[6];
  const history = createMemoryHistory();

  render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <AddReviewButton film={mockFilm}/>
        </Router>
      </Provider>
  );

  expect(screen.getByText(/Add review/i)).toBeInTheDocument();
});
