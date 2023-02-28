import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import FilmsList from './films-list';
import films from '../../mock/films';

const mockStore = configureStore({});

it(`FilmsList should render correctly`, () => {
  const history = createMemoryHistory();

  render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <FilmsList films={films} count={10}/>
        </Router>
      </Provider>
  );

  expect(screen.getByTestId(`test-film-list`)).toBeInTheDocument();
});
