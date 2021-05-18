import * as actions from '../actions';
import * as constants from '../constants';

describe('app actions', () => {
  describe('toggleDarkMode Action', () => {
    it('has a type of TOGGLE_DARK_MODE and topic', () => {
      const expected = {
        type: constants.TOGGLE_DARK_MODE,
        status: true,
      };
      expect(actions.toggleDarkMode(true)).toEqual(expected);
    });
  });
});
