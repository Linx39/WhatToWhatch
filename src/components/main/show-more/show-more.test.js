import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';

import ShowMore from './show-more';
import films from '../../../mock/films';

const mockStore = configureStore({});
jest.spyOn(redux, `useSelector`);
jest.spyOn(redux, `useDispatch`);

it(`'ShowMore' should render correctly`, () => {
  const store = mockStore({
    DATA: {
      films,
    },
    FILMS_LIST_ACTIONS: {
      count: 12,
    },
  });


  const history = createMemoryHistory();

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <ShowMore />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(/Show more/i)).toBeInTheDocument();
});
