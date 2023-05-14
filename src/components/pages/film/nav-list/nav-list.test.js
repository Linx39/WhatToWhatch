import React from 'react';
import {screen, fireEvent} from '@testing-library/react';

import NavList from './nav-list';
import {NavItem} from '../../../../const';

import {renderWithProviders} from '../../../../test-utils/render-with-providers';

describe(`Test NavList`, () => {
  it(`NavList should render correctly`, () => {
    renderWithProviders(
        <NavList
          activeNavItem={NavItem.OVERVIEW}
          onClick={jest.fn()}
        />
    );

    expect(screen.getByText(new RegExp(`${NavItem.OVERVIEW}`, `i`))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${NavItem.DETAILS}`, `i`))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${NavItem.REVIEWS}`, `i`))).toBeInTheDocument();
  });

  it(`onClick should called when user click 'NavItem'`, () => {
    const onClick = jest.fn();

    renderWithProviders(
        <NavList
          activeNavItem={NavItem.OVERVIEW}
          onClick={onClick}
        />
    );

    fireEvent.click(screen.getByText(new RegExp(`${NavItem.REVIEWS}`, `i`)));
    expect(onClick).toBeCalled();
    fireEvent.click(screen.getByText(new RegExp(`${NavItem.DETAILS}`, `i`)));
    expect(onClick).toBeCalled();
  });
});
