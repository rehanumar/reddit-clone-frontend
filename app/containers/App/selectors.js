import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectRouter = state => state.router;

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const selectApp = state => state.app || initialState;

const makeSelectApp = createSelector(
  selectApp,
  substate => substate,
);

const selectUi = createSelector(
  makeSelectApp,
  substate => substate.ui,
);
const selectDarkMode = createSelector(
  selectUi,
  substate => substate.isDarkMode,
);

export default makeSelectApp;

export { makeSelectLocation, selectUi, selectDarkMode };
