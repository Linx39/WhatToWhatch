import React from 'react';
import {screen} from '@testing-library/react';

import App from './app';
import {AppRoute} from '../../const';
import {history, renderWithProviders} from '../../test-utils/render-with-providers';
import {mockState} from '../../test-utils/mock-state';
import {mockFilm, mockPromoFilm} from '../../test-utils/test-data';

const renderFakeApp = () => renderWithProviders(<App />, mockState);

jest.mock(`react-redux`, () => ({
  ...jest.requireActual(`react-redux`),
  useDispatch: jest.fn(() => () => {})
}));

describe(`Test routing`, () => {
  it(`Render Main when user navigate to '/' url`, () => {
    renderFakeApp();

    expect(screen.getAllByAltText(new RegExp(`${mockPromoFilm.name}`, `i`))[0]).toBeInTheDocument();
    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  });

  it(`Render SignIn when user navigate to '/login' url`, () => {
    history.push(AppRoute.LOGIN);
    renderFakeApp();

    expect(screen.getAllByText(/Sign in/i)[0]).toBeInTheDocument();
    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it(`Render MY_LIST when user navigate to '/favorite' url`, () => {
    history.push(AppRoute.MY_LIST);
    renderFakeApp();

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  });

  it(`Render Film when user navigate to '/film/id' url`, () => {
    history.push(`${AppRoute.FILMS}/:id`);
    renderFakeApp();

    expect(screen.getByAltText(new RegExp(`${mockFilm.name} poster`, `i`))).toBeInTheDocument();
    expect(screen.getByText(/More like this/i)).toBeInTheDocument();
  });

  it(`Render AddReview when user navigate to '/film/id/review' url`, () => {
    history.push(`${AppRoute.FILMS}/:id/review`);
    renderFakeApp();

    expect(screen.getByText(new RegExp(`${mockFilm.name}`, `i`))).toBeInTheDocument();
    expect(screen.getByAltText(new RegExp(`${mockFilm.name} poster`, `i`))).toBeInTheDocument();
    expect(screen.getByText(/Add review/i)).toBeInTheDocument();
  });

  it(`Render Player when user navigate to '/player/id' url`, () => {
    window.HTMLMediaElement.prototype.play = jest.fn();
    window.HTMLMediaElement.prototype.pause = jest.fn();

    history.push(`${AppRoute.PLAYER}/:id`);
    renderFakeApp();

    expect(screen.getByText(/Exit/i)).toBeInTheDocument();
  });

  it(`Render NotFoundPage when user navigate to non-existent route`, () => {
    history.push(`/non-existent-route`);
    renderFakeApp();

    expect(screen.getByText(/404. Page not found/i)).toBeInTheDocument();
    expect(screen.getByText(/Вернуться на главную/i)).toBeInTheDocument();
  });
});
