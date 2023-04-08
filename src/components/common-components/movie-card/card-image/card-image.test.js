import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {act} from 'react-dom/test-utils';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import CardImage from './card-image';
import films from '../../../../mock/films';

const history = createMemoryHistory();

describe(`Test CardImage`, () => {
  const film = films[5];
  const {name} = film;
  it(`CardImage should render correctly`, () => {
    render(
        <Router history={history}>
          <CardImage
            film={film}
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
            film={film}
            onMouseEnter={jest.fn()}
            onMouseLeave={jest.fn()}
            onClick={onClick}
          />
        </Router>
    );

    fireEvent.click(screen.getByText(new RegExp(`${name}`, `i`)));
    expect(onClick).toBeCalled();
    expect(onClick).nthCalledWith(1, film.id);
    fireEvent.click(screen.getByAltText(new RegExp(`${name}`, `i`)));
    expect(onClick).toBeCalled();
    expect(onClick).nthCalledWith(1, film.id);
  });

  it(`onMouseEnter and onMouseLeave should called when user enter or leave 'Card'`, () => {
    jest.useFakeTimers();
    jest.spyOn(global, `setTimeout`);
    const onMouseEnter = jest.fn();
    const onMouseLeave = jest.fn();

    render(
        <Router history={history}>
          <CardImage
            film={film}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={jest.fn()}
          />
        </Router>
    );

    const cardDiv = screen.getByTestId(`test-card`);

    // act(() => {
    //   fireEvent(cardDiv, new Event(`setTimeout`));
    // });
    fireEvent.mouseEnter(cardDiv);
    expect(setTimeout).toBeCalledTimes(2);
    expect(setTimeout).lastCalledWith(expect.any(Function), 1000);

    fireEvent.mouseLeave(cardDiv);
    expect(onMouseLeave).toBeCalled();
  });

});
