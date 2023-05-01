import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import ShowMore from './show-more';

const mockStore = configureStore({});

it(`ShowMore should render correctly`, () => {

  render(
      <Provider store={mockStore({})}>
        <ShowMore />
      </Provider>
  );

  expect(screen.getByText(/Show more/i)).toBeInTheDocument();
});
