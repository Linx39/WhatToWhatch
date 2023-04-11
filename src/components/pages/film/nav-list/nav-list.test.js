import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import NavList from './nav-list';
import {NavItem} from '../../../../const';

const history = createMemoryHistory();

describe(`Test NavList`, () => {
  it(`NavList should render correctly`, () => {
    render(
        <Router history={history}>
          <NavList
            activeNavItem={NavItem.OVERVIEW}
            onClick={jest.fn()}
          />
        </Router>
    );

    expect(screen.getByText(new RegExp(`${NavItem.OVERVIEW}`, `i`))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${NavItem.DETAILS}`, `i`))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${NavItem.REVIEWS}`, `i`))).toBeInTheDocument();
  });

  it(`onClick should called when user click 'NavItem'`, () => {
    const onClick = jest.fn();

    render(
        <Router history={history}>
          <NavList
            activeNavItem={NavItem.OVERVIEW}
            onClick={onClick}
          />
        </Router>

    );

    fireEvent.click(screen.getByText(new RegExp(`${NavItem.REVIEWS}`, `i`)));
    expect(onClick).toBeCalled();
    fireEvent.click(screen.getByText(new RegExp(`${NavItem.DETAILS}`, `i`)));
    expect(onClick).toBeCalled();
  });
});
