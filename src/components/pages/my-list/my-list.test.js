import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import MyList from './my-list';
import {mockFilms} from '../../../mock/films';

const mockStore = configureStore({});

it(`MyList should render correctly`, () => {
  const user = {fake: true};
  const store = mockStore({
    USER: {
      user
    },
    DATA: {
      favoriteFilms: mockFilms,
      isFavoriteFilmsLoaded: true,
    }
  });
  const history = createMemoryHistory();

  render(
      <Provider store={store}>
        <Router history={history}>
          <MyList />
        </Router>
      </Provider>
  );

  expect(screen.getByText(/My list/i)).toBeInTheDocument();
  expect(screen.getByText(/Catalog/i)).toBeInTheDocument();

});
