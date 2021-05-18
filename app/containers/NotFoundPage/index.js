/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import styled from 'styled-components';
import NotFoundImage from 'images/not-found.png';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

export default function NotFound() {
  return (
    <StyledContainer>
      <img src={NotFoundImage} alt="surprised face" />
      <h1>page not found</h1>
      <p>the page you requested does not exist</p>
    </StyledContainer>
  );
}
