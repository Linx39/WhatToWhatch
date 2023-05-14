import React from 'react';
import {screen} from '@testing-library/react';

import UserBlock from './user-block';
import {renderWithProviders} from '../../../test-utils/render-with-providers';
import {mockStateUserAutch, mockStateUserNoAutch} from '../../../test-utils/mock-state';

describe(`Test UserBlock`, () => {

  it(`If user authorized should render 'UserBlockAvatar'`, () => {
    renderWithProviders(
        <UserBlock />,
        mockStateUserAutch
    );

    expect(screen.getByAltText(/User avatar/i)).toBeInTheDocument();
  });

  it(`If user not authorized should render 'UserBlockSignIn'`, () => {
    renderWithProviders(
        <UserBlock />,
        mockStateUserNoAutch
    );

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });
});
