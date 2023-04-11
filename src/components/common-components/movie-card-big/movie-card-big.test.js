import React from 'react';
import {render, screen} from '@testing-library/react';

import MovieCardBig from './movie-card-big';

it(`MovieCardBig should render correctly`, () => {
  const alt = `picture`;

  render(
      <MovieCardBig src={``} alt={alt}/>
  );

  expect(screen.getByAltText(new RegExp(`${alt}`, `i`))).toBeInTheDocument();
});
