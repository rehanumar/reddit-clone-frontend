/**
 *
 * Tests for SidebarPanel
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import SidebarPanel from '../index';

describe('<SidebarPanel />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<SidebarPanel />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to have additional unit tests specified', () => {
    const props = {
      heading: 'About Community',
    };
    const {
      container: { firstChild },
    } = render(<SidebarPanel {...props} />);
    expect(firstChild).toMatchSnapshot();
  });

  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<SidebarPanel />);
    expect(firstChild).toMatchSnapshot();
  });
});
