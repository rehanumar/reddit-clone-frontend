/**
 *
 * Tests for Button
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import Button from '../index';

describe('<Button />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Button />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('should render with parent props', () => {
    const props = {
      background: 'button',
      color: 'body',
      fill: 'body',
      borderColor: 'button',
      lineHeight: '16',
      fontWeight: '12',
      width: '40px',
      height: '30px',
      padding: '20px 30px',
    };
    const {
      container: { firstChild },
    } = render(<Button {...props} />);
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
    } = render(<Button />);
    expect(firstChild).toMatchSnapshot();
  });
});
