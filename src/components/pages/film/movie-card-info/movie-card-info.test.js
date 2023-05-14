import React from 'react';
import {screen} from '@testing-library/react';

import MovieCardInfo from './movie-card-info';
import {NavItem} from '../../../../const';
import {renderWithProviders} from '../../../../test-utils/render-with-providers';
import {mockState} from '../../../../test-utils/mock-state';
import {mockFilm} from '../../../../test-utils/test-data';

jest.mock(`react-redux`, () => ({
  ...jest.requireActual(`react-redux`),
  useDispatch: jest.fn(() => () => {})
}));

it(`MovieCardInfo should render correctly`, () => {
  renderWithProviders(
      <MovieCardInfo
        film={mockFilm}
        comments={[]}
        activeNavItem={NavItem.REVIEWS}
        onClick={jest.fn()}
      />,
      mockState
  );

  expect(screen.getByAltText(new RegExp(`${mockFilm.name} poster`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${NavItem.REVIEWS}`, `i`))).toBeInTheDocument();
});

