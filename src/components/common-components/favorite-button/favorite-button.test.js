import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import FavoriteButton from './favorite-button';
import {mockFilms} from '../../../mock/films';

const mockStore = configureStore({});

it(`FavoriteButton should render correctly`, () => {
  const mockFilm = mockFilms[8];
  const user = {fake: true};
  const store = mockStore({
    USER: {user},
  });
  const history = createMemoryHistory();

  render(
      <Provider store={store}>
        <Router history={history}>
          <FavoriteButton film={mockFilm} onLoadData={jest.fn()}/>
        </Router>
      </Provider>
  );

  expect(screen.getByText(/My list/i)).toBeInTheDocument();
});
