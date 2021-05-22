/**
 *
 * Dropdown
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDropdown = styled.ul`
  display: inline-flex;
  vertical-align: middle;
  cursor: pointer;

  margin-block-start: 0;
  margin-block-end: 0;
  list-style: none;
  padding: 2px 0;
  margin-left: 8px;
  border: 1px solid transparent;

  position: relative;

  &:focus,
  &:hover,
  &:visited {
    border: 1px solid ${props => props.theme.line};
  }
`;

const StyledDropdownContainer = styled.div`
  display: ${props => (props.open ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: -140px;

  width: 213px;
  overflow-x: hidden;
  z-index: 3;
  padding-top: 6px;
  border: 1px solid ${props => props.theme.line};
  border-radius: 0 0 4px 4px;
  margin-top: -2px;
  border-top: none;
  box-shadow: none;
  overflow-y: auto;
  background: ${props => props.theme.body};
  color: ${props => props.theme.bodyText};
`;

function Dropdown({ open = false, selected, children }) {
  const [visiblity, toggleVisibility] = useState(open);

  return (
    <StyledDropdown onClick={() => toggleVisibility(!visiblity)}>
      {selected}
      <StyledDropdownContainer open={visiblity}>
        {children}
      </StyledDropdownContainer>
    </StyledDropdown>
  );
}

Dropdown.propTypes = {
  children: PropTypes.oneOfType([PropTypes.elementType, PropTypes.array]),
  selected: PropTypes.oneOfType([PropTypes.elementType, PropTypes.object]),
  open: PropTypes.bool,
};

const DropdownItem = styled.li`
  margin-block-start: 0;
  margin-block-end: 0;
  list-style: none;
  padding: 10px 16px 10px 28px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  color: ${props => props.theme.bodyText};
  display: flex;

  &:hover {
    background: ${props => props.theme.newRedditThemeButton};
    color: ${props => props.theme.white};
  }
`;

const DropdownHeading = styled.h3`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 12px;
  text-transform: uppercase;
  color: ${props => props.theme.actionIcon};
  margin: 8px 0 4px 12px;
`;

export default Dropdown;
export { DropdownItem, DropdownHeading };
