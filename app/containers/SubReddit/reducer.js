/*
 *
 * SubReddit reducer
 *
 */
import produce from 'immer';
import * as constants from './constants';

export const initialState = {
  isLoading: false,
  data: {},
};

/* eslint-disable default-case, no-param-reassign */
const subRedditReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.LOAD_SUB_REDDIT:
        draft.isLoading = true;
        break;

      case constants.LOAD_SUB_REDDIT_SUCCESS:
        draft.isLoading = false;
        draft.data = action.data;
        break;

      case constants.SET_ERROR:
        draft.isLoading = false;
        break;
    }
  });

export default subRedditReducer;
