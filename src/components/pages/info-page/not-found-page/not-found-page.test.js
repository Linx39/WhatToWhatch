import React from 'react';
import {screen} from '@testing-library/react';

import NotFoundPage from './not-found-page';
import {renderWithProviders} from '../../../../test-utils/render-with-providers';
import {InfoText} from '../../../../const';

it(`NotFoundPage should render correctly`, () => {
  const linkText = `Вернуться на главную`;

  renderWithProviders(<NotFoundPage />);

  expect(screen.getByText(new RegExp(`${InfoText.PAGE_NOT_FOUND}`, `i`))).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`${linkText}`, `i`))).toBeInTheDocument();
});
