import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
// import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';

import AddReviewForm from './add-revew-form';
import film from '../../../mock/film';

const mockStore = configureStore({});
jest.spyOn(redux, `useDispatch`);

it(`Render 'AddReviewForm'`, () => {
  const history = createMemoryHistory();

  render(
      <redux.Provider store={mockStore({})}>
        <Router history={history}>
          <AddReviewForm film={film}/>
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(/Post/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Review text/i)).toBeInTheDocument();
  expect(screen.getByTestId(`review`)).toBeInTheDocument();

  userEvent.type(screen.getByTestId(`review`), `Coll`);

  expect(screen.getByDisplayValue(`Coll`)).toBeInTheDocument();
});
