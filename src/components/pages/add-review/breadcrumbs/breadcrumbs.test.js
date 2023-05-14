import React from 'react';
import {screen, fireEvent} from '@testing-library/react';

import BreadCrumbs from './breadcrumbs';
import {renderWithProviders} from '../../../../test-utils/render-with-providers';
import {mockFilm} from '../../../../test-utils/test-data';

describe(`Test BreadCrumbs`, () => {
  const {name} = mockFilm;

  it(`BreadCrumbs should render correctly`, () => {
    renderWithProviders(
        <BreadCrumbs film={mockFilm} onClick={jest.fn()}/>,
    );

    expect(screen.getByText(/Add review/i)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${name}`, `i`))).toBeInTheDocument();
  });

  it(`onClick should called when user click 'name'`, () => {
    const onClick = jest.fn();

    renderWithProviders(
        <BreadCrumbs film={mockFilm} onClick={onClick} />,
    );

    fireEvent.click(screen.getByText(new RegExp(`${name}`, `i`)));
    expect(onClick).toBeCalled();
  });

});
