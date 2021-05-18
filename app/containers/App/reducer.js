import produce from 'immer';
import * as constants from './constants';

export const initialState = {
  user: {},
  ui: {
    isDarkMode: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.TOGGLE_DARK_MODE:
        draft.ui.isDarkMode = action.status;
        break;
    }
  });

export default appReducer;
