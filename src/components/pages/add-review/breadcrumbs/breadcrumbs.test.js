import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import BreadCrumbs from './breadcrumbs';
import {mockFilms} from '../../../../mock/films';

describe(`Test BreadCrumbs`, () => {
  const mockFilm = mockFilms[1];
  const history = createMemoryHistory();
  const {name} = mockFilm;

  it(`BreadCrumbs should render correctly`, () => {
    render(
        <Router history={history}>
          <BreadCrumbs film={mockFilm} onClick={jest.fn()}/>
        </Router>
    );

    expect(screen.getByText(/Add review/i)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${name}`, `i`))).toBeInTheDocument();
  });

  it(`onClick should called when user click 'name'`, () => {
    const onClick = jest.fn();

    render(
        <Router history={history}>
          <BreadCrumbs film={mockFilm} onClick={onClick} />
        </Router>
    );

    fireEvent.click(screen.getByText(new RegExp(`${name}`, `i`)));
    expect(onClick).toBeCalled();
  });

});
