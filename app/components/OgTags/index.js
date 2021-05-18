/**
 *
 * OgTags
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

function OgTags({ image, content }) {
  const subRedditName = window.location.pathname.slice(1, -1);
  return (
    <>
      <meta property="og:ttl" content="600" />
      <meta property="og:site_name" content="reddit" />
      <meta property="twitter:site" content="@reddit" />
      <meta property="twitter:card" content={content} />
      <meta property="og:title" content={subRedditName} />
      <meta property="twitter:title" content={subRedditName} />
      <meta property="twitter:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:image" content={image} />
    </>
  );
}

OgTags.propTypes = {
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default memo(OgTags);
