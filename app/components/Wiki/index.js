/**
 *
 * Wiki
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from 'components/Card';

const StyledWikiContainer = styled(Card)`
  height: 100vh;
  width: 640px;
`;

function Wiki() {
  return <StyledWikiContainer />;
}

Wiki.propTypes = {};

export default memo(Wiki);
