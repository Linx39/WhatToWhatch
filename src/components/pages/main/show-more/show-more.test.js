import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import ShowMore from './show-more';
import films from '../../../../mock/films';

const mockStore = configureStore({});

it(`ShowMore should render correctly`, () => {
  const store = mockStore({
    DATA: {
      films,
    },
    FILMS_ACTIONS: {
      count: 12,
    },
  });

  render(
      <Provider store={store}>
        <ShowMore />
      </Provider>
  );

  expect(screen.getByText(/Show more/i)).toBeInTheDocument();
});
