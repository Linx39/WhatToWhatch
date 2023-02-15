import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';

import MyList from './my-list';
import films from '../../mock/films';
import user from '../../mock/user';

const mockStore = configureStore({});
jest.spyOn(redux, `useSelector`);
jest.spyOn(redux, `useDispatch`);

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
      <redux.Provider store={store}>
        <Router history={history}>
          <MyList />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(/My list/i)).toBeInTheDocument();
  expect(screen.getByText(/Catalog/i)).toBeInTheDocument();

});
