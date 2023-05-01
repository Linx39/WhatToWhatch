import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import InfoMessage from './info-message';

it(`UserBlockSignIn should render correctly`, () => {
  const history = createMemoryHistory();
  const fakeText = `fake text`;

  render(
      <Router history={history}>
        <InfoMessage text={fakeText} />
      </Router>
  );

  expect(screen.getByText(new RegExp(`${fakeText}`, `i`))).toBeInTheDocument();
});
