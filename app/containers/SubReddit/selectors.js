import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the subReddit state domain
 */

const selectSubRedditDomain = state => state.subReddit || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SubReddit
 */

const makeSelectSubReddit = createSelector(
  selectSubRedditDomain,
  substate => substate,
);

const selectPosts = createSelector(
  makeSelectSubReddit,
  substate => (substate.data.data ? substate.data.data.children : []),
);

// ignore this as API response changed from last time I requested. Ideally, this should be removed because we are versioned controlled.
const selectSubReddit = createSelector(
  makeSelectSubReddit,
  substate => (substate.data[0] ? substate.data[0].data.children[0].data : []),
);

export default makeSelectSubReddit;
export { selectSubRedditDomain, selectPosts, selectSubReddit };
