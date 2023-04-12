import React from 'react';
import {render, screen} from '@testing-library/react';

import CardVideo from './card-video';
import films from '../../../../mock/films';

// jest.mock(`../../video-player/video-player`, () => {
//   const mockVideoPlayer = () => <>This is mock VideoPlayer</>;
//   mockVideoPlayer.displayName = `MockVideoPlayer`;
//   return {
//     __esModule: true,
//     default: () => {
//       return mockVideoPlayer();
//     }
//   };
// });

const film = films[8];
const {id} = film;

it(`CardVideo should render correctly`, () => {
  // window.HTMLMediaElement.prototype.muted = jest.fn();

  render(
      <CardVideo film={film} />
  );

  expect(screen.getByTestId(new RegExp(`test-card-video-${id}`, `i`))).toBeInTheDocument();
});
