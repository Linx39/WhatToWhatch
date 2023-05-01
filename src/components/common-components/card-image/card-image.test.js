import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import CardImage from './card-image';
import {mockFilms} from '../../../mock/films';

const history = createMemoryHistory();

describe(`Test CardImage`, () => {
  const mockFilm = mockFilms[5];
  const {name} = mockFilm;
  it(`CardImage should render correctly`, () => {
    render(
        <Router history={history}>
          <CardImage
            film={mockFilm}
            onMouseEnter={jest.fn()}
            onMouseLeave={jest.fn()}
            onClick={jest.fn()}
          />
        </Router>
    );

    expect(screen.getByAltText(new RegExp(`${name}`, `i`))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${name}`, `i`))).toBeInTheDocument();
  });

  it(`onClick should called when user click 'Card'`, () => {
    const onClick = jest.fn();

    render(
        <Router history={history}>
          <CardImage
            film={mockFilm}
            onMouseEnter={jest.fn()}
            onMouseLeave={jest.fn()}
            onClick={onClick}
          />
        </Router>
    );

    fireEvent.click(screen.getByText(new RegExp(`${name}`, `i`)));
    expect(onClick).toBeCalled();
    fireEvent.click(screen.getByAltText(new RegExp(`${name}`, `i`)));
    expect(onClick).toBeCalled();
    expect(onClick).toBeCalledTimes(2);
  });

  it(`onMouseEnter and onMouseLeave should called when user enter or leave 'Card'`, () => {
    const onMouseEnter = jest.fn();
    const onMouseLeave = jest.fn();

    render(
        <Router history={history}>
          <CardImage
            film={mockFilm}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={jest.fn()}
          />
        </Router>
    );

    const cardDiv = screen.getByTestId(`test-card`);
    fireEvent.mouseEnter(cardDiv);
    expect(onMouseEnter).toBeCalled();

    fireEvent.mouseLeave(cardDiv);
    expect(onMouseLeave).toBeCalled();
  });
});