import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import Stars from './stars';

describe(`Test Stars`, () => {
  const history = createMemoryHistory();

  it(`'Stars' should render correctly`, () => {
    render(
        <Router history={history}>
          <Stars ratingValue={6} onChange={jest.fn()} />
        </Router>
    );

    expect(screen.getByLabelText(/Rating 3/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Rating 8/)).toBeInTheDocument();
  });

  it(`When user click Star should be change Rating Value`, () => {
    let mockRatingValue = 2;
    const starsChangeHandle = jest.fn();
    // starsChangeHandle.mockImplementation(
    //     () => 7
    // );

    render(
        <Router history={history}>
          <Stars ratingValue={mockRatingValue} onChange={starsChangeHandle} />
        </Router>
    );

    userEvent.click(screen.getByTestId(`Rating 7`));

    expect(starsChangeHandle).toBeCalled();

    // expect(screen.getByTestId(`Rating 7`)).toBeChecked();
    // expect(screen.getByText(/Mock Game Screen/i));
  });
});
