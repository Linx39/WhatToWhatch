import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import NotFound from './not-found';
import {InfoText} from '../../../../const';

const mockStore = configureStore({});

it(`NotFound should render correctly`, () => {
  const store = mockStore({});
  const history = createMemoryHistory();
  const linkText = `Вернуться на главную`;

  render(
      <Provider store={store}>
        <Router history={history}>
          <NotFound />
        </Router>
      </Provider>
  );

  expect(screen.getByText(new RegExp(`${InfoText.ERROR_404}`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${linkText}`, `i`))).toBeInTheDocument();
});
