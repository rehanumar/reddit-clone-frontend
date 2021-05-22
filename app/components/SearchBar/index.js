/**
 *
 * SearchBar
 *
 */

import React from 'react';
import styled from 'styled-components';
import SearchIcon from 'images/search-icon.svg';

const StyledSearchDropDown = styled.div`
  position: relative;
  fill: ${props => props.theme.navIcon};
  display: inline-flex;
  max-width: 656px;
  flex-grow: 1;
  margin: 0 auto;
`;

const StyledLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 0;
  height: 18px;
  margin-left: 16px;
  margin-top: -11px;
`;

const StyledIcon = styled(SearchIcon)`
  fill: ${props => props.theme.actionIcon};
  width: 18px;
  height: 18px;
  transform: translateY(-25%);
  margin-top: 3px;
`;

const StyledInput = styled.input`
  appearance: none;
  background-color: ${props => props.theme.field};
  border-radius: 4px;
  border: 1px solid ${props => props.theme.line};
  box-shadow: none;
  color: ${props => props.theme.bodyText};
  display: block;
  height: 36px;
  outline: none;
  padding: 0 16px 0 40px;
  width: 100%;
  font-size: 14px;
`;

function SearchBar() {
  return (
    <StyledSearchDropDown>
      <StyledLabel htmlFor="header-search-bar">
        <StyledIcon />
      </StyledLabel>
      <form style={{ width: '100%' }}>
        <StyledInput
          type="search"
          id="header-search-bar"
          placeholder="Search"
        />
      </form>
    </StyledSearchDropDown>
  );
}

export default SearchBar;
