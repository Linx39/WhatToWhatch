import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';

import AddFavoriteButton from './add-favorite-button';
import film from '../../../mock/film';
import user from '../../../mock/user';

const mockStore = configureStore({});
jest.spyOn(redux, `useDispatch`);

it(`'AddFavoriteButton' should render correctly`, () => {
  const store = mockStore({
    USER: {user},
  });

  const history = createMemoryHistory();

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <AddFavoriteButton film={film} isPromo={false}/>
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(/My list/i)).toBeInTheDocument();
});
