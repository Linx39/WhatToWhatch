import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';

import RatingStars from './rating-stars';

describe(`Test RatingStars`, () => {
  it(`RatingStars should render correctly`, () => {
    render(
        <RatingStars
          ratingValue={6}
          onChange={jest.fn()}
          isSubmiting={false}
        />
    );

    expect(screen.getByLabelText(/Rating 5/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Rating 8/i)).toBeInTheDocument();
  });

  it(`onChange should called when user click 'Star'`, () => {
    const onChange = jest.fn();

    render(
        <RatingStars
          ratingValue={2}
          onChange={onChange}
          isSubmiting={false}
        />
    );

    expect(screen.getByLabelText(/Rating 6/i)).not.toBeChecked();
    fireEvent.click(screen.getByLabelText(/Rating 6/i));
    expect(onChange).toBeCalled();
  });

  it(`'Star' should checked when user choose`, () => {
    render(
        <RatingStars
          ratingValue={3}
          onChange={jest.fn()}
          isSubmiting={false}
        />
    );

    expect(screen.getByLabelText(/Rating 4/i)).not.toBeChecked();
    expect(screen.getByLabelText(/Rating 3/i)).toBeChecked();
  });
});
