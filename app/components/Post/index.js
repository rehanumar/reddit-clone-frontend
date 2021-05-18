/**
 *
 * Post
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DownIcon from 'images/down-icon.png';
import UpIcon from 'images/up-icon.png';
import BookmarkIcon from 'images/bookmark-icon.png';
import CommentIcon from 'images/comment-icon.png';
import ForwardIcon from 'images/forward-icon.png';

const StyledContainer = styled.div`
  border: 1px solid var(--post-icon-color);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
  display: flex;
  align-items: flex-start;
  background: ${props => props.theme.postTransparent20};
  border: 1px solid ${props => props.theme.line};
`;

const LeftContainer = styled.div`
  width: 60px;
`;

const RightContainer = styled.div`
  padding-top: 8px;
  background: ${props => props.theme.body};
  width: 100%;
`;

const StyledScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8px;
`;

const StyledIcon = styled.img`
  width: 13px;
`;

const StyledScore = styled.div`
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  pointer-events: none;
  word-break: normal;
  color: rgb(26, 26, 27);
`;

const StyledTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  color: ${props => props.theme.postTitleTextColor};
  display: inline;
  padding-right: 5px;
  word-wrap: break-word;
}
`;

const StyledDescription = styled.div`
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  word-break: break-word;
  overflow: auto;
  padding-bottom: 1px;
  margin-bottom: -1px;
  color: ${props => props.theme.postDescreptionColor};
`;

const StyledMetaData = styled.div`
  color: rgb(120, 124, 126);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  align-items: center;
  display: flex;
`;

const StyledPostFooter = styled.div`
  display: flex;
  width: 100%;
`;

const StyledPill = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: ${props => props.theme.actionIcon}
  font-weight: 700;
  padding: 8px;
  word-break: normal;
  cursor: pointer;

  line-height: 1;
  text-transform: capitalize;

  margin: 2px;
  border-radius: 3px;

  &:hover {
    background: ${props => props.theme.navIconFaded10};
  }
`;

function Post({ post }) {
  return (
    <StyledContainer>
      <LeftContainer>
        <StyledScoreContainer>
          <StyledIcon src={UpIcon} alt="up vote this post" />
          <StyledScore>{post.data.score}</StyledScore>
          <StyledIcon src={DownIcon} alt="down vote this post" />
        </StyledScoreContainer>
      </LeftContainer>
      <RightContainer>
        <StyledMetaData>
          {post.data.author && <span>Posted by u/{post.data.author}</span>}
        </StyledMetaData>
        <StyledTitle>{post.data.title}</StyledTitle>
        <StyledDescription>{post.data.selftext}</StyledDescription>
        <StyledPostFooter>
          <StyledPill>
            <img
              src={CommentIcon}
              alt="add comments"
              style={{ width: '16px', marginRight: '5px' }}
            />
            {post.data.num_comments} Comments
          </StyledPill>
          <StyledPill>
            <img
              src={ForwardIcon}
              alt="forward this post"
              style={{ width: '16px', marginRight: '5px' }}
            />
            Share
          </StyledPill>
          <StyledPill>
            <img
              src={BookmarkIcon}
              alt="bookmark this post"
              style={{ width: '16px', marginRight: '5px' }}
            />
            Save
          </StyledPill>
        </StyledPostFooter>
      </RightContainer>
    </StyledContainer>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default memo(Post);
