import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import UserBlockAvatar from './user-block-avatar';

const mockStore = configureStore({});

it(`UserBlockAvatar should render correctly`, () => {
  const user = {fake: true};
  const store = mockStore({
    USER: {user},
  });

  render(
      <Provider store={store}>
        <UserBlockAvatar />
      </Provider>
  );

  expect(screen.getByAltText(/User avatar/i)).toBeInTheDocument();
});
