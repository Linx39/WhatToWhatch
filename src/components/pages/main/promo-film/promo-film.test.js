import React from 'react';
import {screen} from '@testing-library/react';

import PromoFilm from './promo-film';
import {renderWithProviders} from '../../../../test-utils/render-with-providers';
import {mockStateUserAutch} from '../../../../test-utils/mock-state';
import {mockPromoFilm} from '../../../../test-utils/test-data';

it(`PromoFilm should render correctly`, () => {
  const {name, genre, released} = mockPromoFilm;

  renderWithProviders(
      <PromoFilm film={mockPromoFilm} />,
      mockStateUserAutch
  );

  expect(screen.getByAltText(new RegExp(`${name} poster`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${name}`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${genre}`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${released}`, `i`))).toBeInTheDocument();
});
