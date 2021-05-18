import * as actions from '../actions';
import * as constants from '../constants';

describe('SubReddit actions', () => {
  describe('loadSubReddit Action', () => {
    it('has a type of LOAD_SUB_REDDIT and topic', () => {
      const expected = {
        type: constants.LOAD_SUB_REDDIT,
        topic: 'cybersecurity',
      };
      expect(actions.loadSubReddit('cybersecurity')).toEqual(expected);
    });
  });
});
