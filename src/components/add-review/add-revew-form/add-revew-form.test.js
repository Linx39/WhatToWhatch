import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import AddReviewForm from './add-revew-form';
import films from '../../../mock/films';

const mockStore = configureStore({});

it(`AddReviewForm should render correctly`, () => {
  const film = films[5];

  render(
      <Provider store={mockStore({})}>
        <AddReviewForm film={film}/>
      </Provider>
  );

  expect(screen.getByText(/Post/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Review text/i)).toBeInTheDocument();
});
