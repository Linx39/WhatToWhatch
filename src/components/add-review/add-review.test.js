import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';

import AddReview from './add-review';
import {AuthorizationStatus} from '../../const';
import films from '../../mock/films';
import user from '../../mock/user';

const mockStore = configureStore({});
jest.spyOn(redux, `useSelector`);
jest.spyOn(redux, `useDispatch`);

it(`'AddReview' should render correctly`, () => {
  const film = films[7];
  const {name} = film;

  const store = mockStore({
    USER: {
      authorizationStatus: AuthorizationStatus.AUTH,
      user,
    },
    DATA: {
      film,
      isFilmLoaded: true,
    },
  });


  const history = createMemoryHistory();

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <AddReview />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(new RegExp(`${name}`, `i`))).toBeInTheDocument();
  expect(screen.getByAltText(new RegExp(`${name} poster`, `i`))).toBeInTheDocument();
  expect(screen.getByText(/Add review/i)).toBeInTheDocument();
});
