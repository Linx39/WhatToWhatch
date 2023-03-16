import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import MyList from './my-list';
import films from '../../../mock/films';
import user from '../../../mock/user';

const mockStore = configureStore({});

it(`'MyList' should render correctly`, () => {
  const store = mockStore({
    USER: {
      user
    },
    DATA: {
      favoriteFilms: films,
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
