/**
 *
 * SidebarPanel
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from 'components/Card';

const StyledHead = styled.div`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 12px;
  background-color: ${props => props.theme.sidebarWidgetHeaderColor};
  border-radius: 3px 3px 0 0;
  color: ${props => props.theme.sidebarWidgetTitleColor};
  display: flex;
  fill: ${props => props.theme.sidebarWidgetTitleColor};
  padding: 0 12px 12px;
`;

const StyledHeading = styled.h2`
  padding: 12px 0 0;
  font-size: 14px;
  line-height: 18px;
  font-weight: 700;
`;

const StyledBody = styled.div`
  padding: 12px;
  vertical-align: baseline;
`;

function SidebarPanel({ heading, children }) {
  return (
    <Card style={{ width: '310px', border: '1px solid #ccc' }}>
      <StyledHead>
        <StyledHeading>{heading}</StyledHeading>
      </StyledHead>
      <StyledBody>{children}</StyledBody>
    </Card>
  );
}

SidebarPanel.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.elementType.isRequired,
};

export default SidebarPanel;
