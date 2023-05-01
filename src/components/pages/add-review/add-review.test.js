import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import AddReview from './add-review';
import {AuthorizationStatus} from '../../../const';
import {mockFilms} from '../../../mock/mock-films';

const mockStore = configureStore({});

jest.mock(`react-redux`, () => ({
  ...jest.requireActual(`react-redux`),
  useDispatch: jest.fn(() => () => {})
}));

it(`AddReview should render correctly`, () => {
  const user = {fake: true};
  const mockFilm = mockFilms[7];
  const {name} = mockFilm;

  const store = mockStore({
    USER: {
      authorizationStatus: AuthorizationStatus.AUTH,
      user,
    },
    DATA: {
      filmData: {data: mockFilm, isLoading: false, error: null},
    },
  });

  const history = createMemoryHistory();

  render(
      <Provider store={store}>
        <Router history={history}>
          <AddReview />
        </Router>
      </Provider>
  );

  expect(screen.getByText(new RegExp(`${name}`, `i`))).toBeInTheDocument();
  expect(screen.getByAltText(new RegExp(`${name} poster`, `i`))).toBeInTheDocument();
  expect(screen.getByText(/Add review/i)).toBeInTheDocument();
});
