import {createAction} from '@reduxjs/toolkit';

export const REDIRECT_TO_ROUTE = `APP/redirectToRoute`;

export const redirectToRoute = createAction(REDIRECT_TO_ROUTE, (url) => {
  return {
    payload: url,
  };
});
