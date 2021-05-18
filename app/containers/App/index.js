/* eslint-disable no-shadow */
/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { useInjectReducer } from 'utils/injectReducer';

import Header from 'components/Header';
import Snackbar from 'components/Snackbar';
import HomePage from 'containers/HomePage/Loadable';
import SubReddit from 'containers/SubReddit/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { selectDarkMode } from './selectors';
import reducer from './reducer';
import { toggleDarkMode } from './actions';

import GlobalStyle, { theme, darkTheme } from '../../global-styles';

const StyledPage = styled.div`
  position: relative;
  top: 56px;
`;

function App({ darkMode, dispatch, toggleDarkMode }) {
  useInjectReducer({ key: 'app', reducer });
  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <>
        <Header
          darkMode={darkMode}
          dispatch={dispatch}
          toggleDarkMode={toggleDarkMode}
        />
        <StyledPage>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/r/:id" component={SubReddit} />
            <Route component={NotFoundPage} />
          </Switch>
        </StyledPage>
        <Snackbar />
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  darkMode: selectDarkMode(state),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    toggleDarkMode,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withConnect(App);
