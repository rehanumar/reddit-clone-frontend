/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
import styled, { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import Switch from 'react-switch';
import Logo from 'images/logo.svg';
import LogoIcon from 'images/logo-icon.svg';
import SearchBar from 'components/SearchBar';
import { BtnLink } from 'components/Button';
import DropDown, { DropdownItem, DropdownHeading } from 'components/Dropdown';
import PersonIcon from 'images/person-icon.svg';
import DownArrow from 'images/down-arrow-icon.svg';
import NightIcon from 'images/night-icon.svg';
import CoinIcon from 'images/coin-icon.svg';
import PremiumIcon from 'images/premium-icon.svg';
import HelpIcon from 'images/help-icon.svg';
import NewTabIcon from 'images/new-tab-icon.svg';
import LoginIcon from 'images/login-icon.svg';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  background: ${props => props.theme.body};
  padding: 10px 15px;
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const StyledIcon = styled.div`
  color: ${props => props.theme.actionIcon};
  fill: ${props => props.theme.actionIcon};
  border-radius: 4px;
  float: left;
  max-height: 24px;
  max-width: 24px;
  height: 20px;
  width: 20px;
  margin: 0 5px;
`;

const StyledWrapper = styled.div`
  display: inline-block;
`;

const StyledDownArrowIcon = styled(DownArrow)`
  fill: ${props => props.theme.actionIcon};
  display: inline-block;
  height: 20px;
  margin-left: 2px;
  width: 20px;
  vertical-align: middle;
`;

const StyledLogoIcon = styled(LogoIcon)`
  height: 32px;
`;

const StyledLogo = styled(Logo)`
  height: 18px;
  margin: 0 20px 0 10px;
  fill: ${props => props.theme.bodyText} !important;

  @media (max-width: 1050px) {
    display: none;
  }
`;

const StyledBtnLink = styled(BtnLink)`
  vertical-align: middle;
  @media (max-width: 600px) {
    display: none;
  }
`;

const StyledLink = styled.a`
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
`;

const Divider = styled.div`
  margin: 0 16px;
  border-top: 1px solid ${props => props.theme.line};
`;

const StyledNavLink = styled.a`
  display: flex;
  color: inherit;
  text-decoration: none;

  &:hover,
  &:focus,
  &:visited {
    text-decoration: none;
    color: inherit;
  }
`;

function Header({ theme, darkMode, dispatch, toggleDarkMode }) {
  return (
    <StyledHeader>
      <StyledLink href="/">
        <StyledLogoIcon />
        <StyledLogo />
      </StyledLink>
      <SearchBar />
      <StyledWrapper>
        <StyledBtnLink
          background="body"
          borderColor="newRedditThemeButton"
          color="newRedditThemeButton"
        >
          Login
        </StyledBtnLink>
        <StyledBtnLink
          background="newRedditThemeButton"
          borderColor="newRedditThemeButton"
          style={{ marginLeft: '20px' }}
        >
          Sign Up
        </StyledBtnLink>
        <DropDown
          selected={
            <>
              <StyledIcon>
                <PersonIcon />
              </StyledIcon>
              <StyledDownArrowIcon />
            </>
          }
        >
          <DropdownHeading>View options</DropdownHeading>
          <DropdownItem>
            <StyledIcon>
              <NightIcon />
            </StyledIcon>
            <div style={{ marginRight: '20px' }}>Night Mode</div>
            <Switch
              height={20}
              width={35}
              uncheckedIcon={false}
              checkedIcon={false}
              onColor={theme.newRedditThemeActive}
              offColor="#EEE"
              checked={darkMode}
              onChange={checked => dispatch(toggleDarkMode(checked))}
            />
          </DropdownItem>
          <DropdownHeading>More Stuff</DropdownHeading>
          <DropdownItem>
            <StyledNavLink href="/coins">
              <StyledIcon>
                <CoinIcon />
              </StyledIcon>
              Reddit Coins
            </StyledNavLink>
          </DropdownItem>
          <DropdownItem>
            <StyledNavLink href="/premium">
              <StyledIcon>
                <PremiumIcon />
              </StyledIcon>
              Reddit Premium
            </StyledNavLink>
          </DropdownItem>
          <DropdownItem>
            <StyledNavLink href="https://www.reddithelp.com" target="_blank">
              <StyledIcon>
                <HelpIcon />
              </StyledIcon>
              Help Center
              <StyledIcon style={{ height: '12px', width: '12px' }}>
                <NewTabIcon />
              </StyledIcon>
            </StyledNavLink>
          </DropdownItem>
          <Divider />
          <DropdownItem>
            <StyledIcon>
              <LoginIcon />
            </StyledIcon>
            Log In / Sign Up
          </DropdownItem>
        </DropDown>
      </StyledWrapper>
    </StyledHeader>
  );
}

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
};

export default memo(withTheme(Header));
