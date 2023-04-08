import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';

import FavoriteButton from './favorite-button';
import films from '../../../mock/films';
import user from '../../../mock/user';

const mockStore = configureStore({});

it(`FavoriteButton should render correctly`, () => {
  const film = films[8];
  const store = mockStore({
    USER: {user},
  });
  const history = createMemoryHistory();

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <FavoriteButton film={film} onLoadData={jest.fn()}/>
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(/My list/i)).toBeInTheDocument();
});
