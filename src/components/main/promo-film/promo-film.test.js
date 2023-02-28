import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import PromoFilm from './promo-film';
import {AuthorizationStatus} from '../../../const';
import films from '../../../mock/films';

const mockStore = configureStore({});

it(`'PromoFilm' should render correctly`, () => {
  const film = films[3];
  const {name, genre, released} = film;
  const store = mockStore({
    USER: {
      authorizationStatus: AuthorizationStatus.AUTH,
    },
  });

  render(
      <Provider store={store}>
        <PromoFilm film={film} />
      </Provider>
  );

  expect(screen.getByAltText(new RegExp(`${name} poster`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${name}`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${genre}`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${released}`, `i`))).toBeInTheDocument();
});
