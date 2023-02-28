import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';

import Stars from './stars';

describe(`Test Stars`, () => {
  it(`'Stars' should render correctly`, () => {
    render(
        <Stars
          ratingValue={6}
          onChange={jest.fn()}
        />
    );

    expect(screen.getByLabelText(/Rating 5/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Rating 8/i)).toBeInTheDocument();
  });

  it(`onChange should called when user click 'Star'`, () => {
    const onChange = jest.fn();

    render(
        <Stars
          ratingValue={2}
          onChange={onChange}
        />
    );

    expect(screen.getByLabelText(/Rating 6/i)).not.toBeChecked();
    fireEvent.click(screen.getByLabelText(/Rating 6/i));
    expect(onChange).toBeCalled();
  });

  it(`'Star' should checked when user choose`, () => {
    render(
        <Stars
          ratingValue={3}
          onChange={jest.fn()}
        />
    );

    expect(screen.getByLabelText(/Rating 4/i)).not.toBeChecked();
    expect(screen.getByLabelText(/Rating 3/i)).toBeChecked();
  });
});
