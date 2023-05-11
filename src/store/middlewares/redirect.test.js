import {redirect} from './redirect';
import {redirectToRoute} from '../action';
import {AppRoute} from '../../const';

const mockRedux = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };

  const next = jest.fn();
  const invoke = (action) => redirect(store)(next)(action);
  return {store, next, invoke};
};

const fakeHistory = {
  location: {pathname: ``},
  push(path) {
    this.location.pathname = path;
  }
};

jest.mock(`../../browser-history`, () => fakeHistory);

describe(`Custom middleware works correctly`, () => {
  it(`Action passes to next middleware`, () => {
    const {invoke, next} = mockRedux();
    const action = redirectToRoute(AppRoute.MAIN);
    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  it(`Redirect route should be added to fakeHistory`, () => {
    const {invoke} = mockRedux();
    const actionOne = redirectToRoute(AppRoute.LOGIN);
    const actionTwo = redirectToRoute(AppRoute.MY_LIST);

    invoke(redirectToRoute(actionOne));
    expect(fakeHistory.location.pathname).toBe(actionOne);

    invoke(redirectToRoute(actionTwo));
    expect(fakeHistory.location.pathname).toBe(actionTwo);
  });

  it(`Non redirect because bad action`, () => {
    const url = `/fake-url`;
    const {invoke} = mockRedux();
    invoke({type: `TEST_ACTION`, payload: url});
    expect(fakeHistory.location.pathname).not.toBe(url);
  });
});
