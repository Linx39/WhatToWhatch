import {ReducerName} from '../root-reducer';

export const getAuthorizationStatus = (state) => state[ReducerName.USER].authorizationStatus;

export const getUser = (state) => state[ReducerName.USER].user;
