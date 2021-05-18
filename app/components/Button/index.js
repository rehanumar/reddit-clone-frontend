/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  padding: ${props => props.padding || '4px 16px'};
  min-width: ${props => props.width || '32px'};
  min-height: ${props => props.height || '32px'};
  line-height: ${props => props.lineHeight || '17px'};
  font-weight: ${props => props.fontWeight || '700'};
  font-size: ${props => props.fontSize || '14px'};
  font-family: Noto Sans, Arial, sans-serif;
  background: ${props =>
    props.background ? props.theme[props.background] : props.theme.button};
  color: ${props =>
    props.color ? props.theme[props.color] : props.theme.body};
  fill: ${props => (props.fill ? props.theme[props.fill] : props.theme.body)};
  border: 1px solid
    ${props =>
    props.borderColor ? props.theme[props.borderColor] : props.theme.button};
  border-radius: 50px;
`;

const OrangeButton = styled(Button)`
  background: ${props => props.theme.button};
  border: 1px solid ${props => props.theme.button};
`;

const StyledLink = styled(Button)`
  text-decoration: none;
  color: ${props =>
    props.color ? props.theme[props.color] : props.theme.body};

  &:hover,
  &:visited,
  &:focus {
    text-decoration: none;
    color: ${props =>
    props.color ? props.theme[props.color] : props.theme.body};
  }
`;

function BtnLink(props) {
  const { onClick, children, ...rest } = props;
  const handleClick = e => {
    e.preventDefault();
    onClick();
  };
  return (
    <StyledLink as="a" role="button" href="" onClick={handleClick} {...rest}>
      {children}
    </StyledLink>
  );
}

BtnLink.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};

export default Button;
export { OrangeButton, BtnLink };
