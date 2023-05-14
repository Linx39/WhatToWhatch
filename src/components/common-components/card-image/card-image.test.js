import React from 'react';
import {screen, fireEvent} from '@testing-library/react';

import CardImage from './card-image';
import {renderWithProviders} from '../../../test-utils/render-with-providers';
import {mockFilm} from '../../../test-utils/test-data';

describe(`Test CardImage`, () => {
  const {name} = mockFilm;
  it(`CardImage should render correctly`, () => {
    renderWithProviders(
        <CardImage
          film={mockFilm}
          onMouseEnter={jest.fn()}
          onMouseLeave={jest.fn()}
          onClick={jest.fn()}
        />
    );

    expect(screen.getByAltText(new RegExp(`${name}`, `i`))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${name}`, `i`))).toBeInTheDocument();
  });

  it(`onClick should called when user click 'Card'`, () => {
    const onClick = jest.fn();

    renderWithProviders(
        <CardImage
          film={mockFilm}
          onMouseEnter={jest.fn()}
          onMouseLeave={jest.fn()}
          onClick={onClick}
        />
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

    renderWithProviders(
        <CardImage
          film={mockFilm}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={jest.fn()}
        />
    );

    const cardDiv = screen.getByTestId(`test-card`);
    fireEvent.mouseEnter(cardDiv);
    expect(onMouseEnter).toBeCalled();

    fireEvent.mouseLeave(cardDiv);
    expect(onMouseLeave).toBeCalled();
  });
});
