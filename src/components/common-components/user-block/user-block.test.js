import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import UserBlock from './user-block';
import user from '../../../mock/user';

const mockStore = configureStore({});

it(`UserBlock should render correctly`, () => {
  const store = mockStore({
    USER: {user},
  });

  render(
      <Provider store={store}>
        <UserBlock />
      </Provider>
  );

  expect(screen.getByAltText(/User avatar/i)).toBeInTheDocument();
});
