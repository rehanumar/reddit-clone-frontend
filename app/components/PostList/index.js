/**
 *
 * PostList
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Post from 'components/Post';

const StyledPostsContainer = styled.div`
  width: 640px;
`;

function PostList({ posts }) {
  return (
    <StyledPostsContainer>
      {posts.map(post => (
        <Post post={post} />
      ))}
    </StyledPostsContainer>
  );
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default memo(PostList);
