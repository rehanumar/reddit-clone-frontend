// import produce from 'immer';
import subRedditReducer from '../reducer';
// import { someAction } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('subRedditReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      // default state params here
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(subRedditReducer(undefined, {})).toEqual(expectedResult);
  });
});
