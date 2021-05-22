/* eslint-disable no-shadow */
/**
 *
 * SubReddit
 *
 */

import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import humanize from 'human-number';

import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane';
import NavLink from 'react-bootstrap/NavLink';
import OgTags from 'components/OgTags';
import PostList from 'components/PostList';
import Wiki from 'components/Wiki';
import SidebarPanel from 'components/SidebarPanel';
import Card from 'components/Card';
import Button from 'components/Button';
import FireIcon from 'images/fire-icon.svg';
import NewIcon from 'images/new-icon.svg';
import TrendingIcon from 'images/trending-icon.svg';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { selectPosts } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadSubReddit } from './actions';

const StyledPageMotive = styled.div`
  background: rgb(255, 105, 51);
  height: 144px;
  padding: 8px 16px;
  display: block;
  flex-direction: row;
  margin: 0 auto;
  min-width: 260px;
`;

const StyledContainerWrapper = styled.div`
  width: 100%;
  background: ${props => props.theme.body};
`;

const StyledPageHeaderContainer = styled.div`
  max-width: 984px;
  background-color: ${props => props.theme.body};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1024px;
  padding: 0 16px 0 24px;
`;

const StyledPageHeader = styled.div`
  align-items: flex-start;
  display: flex;
  margin-bottom: 12px;
  margin-top: -14px;
`;

const StyledImage = styled.img`
  border-radius: 100%;
  border: 4px solid ${props => props.theme.body};
  display: inline-block;
  height: 80px;
  width: 80px;
`;

const CommunityWrapper = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex: 1;
  padding-left: 16px;
  margin-top: 24px;
  position: relative;
  width: calc(100% - 80px);
`;

const CommunityNameWrapper = styled.div`
  display: inline-block;
  max-width: calc(100% - 96px);
  padding-right: 24px;
`;

const ButtonWrapper = styled.div`
  width: 96px;
`;

const StyledName = styled.h1`
  color: ${props => props.theme.bodyText};
  flex: 1;
  font-size: 28px;
  font-weight: 700;
  line-height: 32px;
  overflow: hidden;
  padding: 0 2px 4px 0;
  text-overflow: ellipsis;
  width: 100%;
`;

const StyledMetaText = styled.h2`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${props => props.theme.metaText};
`;

const StyledTabs = styled.div`
  margin-left: -16px;
  margin-top: -4px;
`;

const StyledTabsWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  min-width: 260px;
  padding: 0 16px;
  max-width: 1200px;
`;

const TabStyles = styled.div`
  & .nav-link.${props => props.selectedTab} {
    border-bottom: 3px solid ${props => props.theme.navBarActiveLink};
    color: ${props => props.theme.bodyText};
  }
  & .nav-link {
    display: inline-block;
    vertical-align: middle;
    border-bottom: 3px solid transparent;
    color: ${props => props.theme.metaText};
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    padding-bottom: 1px;
    text-decoration: none;
  
    & .nav-link:hover {
      color: ${props => props.theme.navBarHoverLink}
      text-decoration: none;
    }
  }
`;

const StyledContentSection = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  padding: 20px 24px;
  max-width: 100%;
  background: ${props => props.theme.canvas};
`;

const StyledSidebar = styled.div`
  margin-left: 24px;
`;

const FilterWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const StyledPill = styled.div`
  fill: ${props => props.theme.button} !important;
  color: ${props => props.theme.button};
  display: flex;
  align-items: center;
  border-radius: 50px;
  background: ${props => (props.active ? props.theme.field : '')};
  padding: 4px 16px;
  cursor: pointer;
`;

export function SubReddit({ posts, theme, match, dispatch, loadSubReddit }) {
  useInjectReducer({ key: 'subReddit', reducer });
  useInjectSaga({ key: 'subReddit', saga });
  const [selectedTab, setSelectedTab] = useState('posts');
  useEffect(() => {
    dispatch(loadSubReddit(match.params.id));
  }, []);

  return (
    <>
      <Helmet>
        <title>{match.params.id}</title>
        <OgTags />
      </Helmet>
      <TabContainer
        id="left-tabs-example"
        defaultActiveKey={selectedTab}
        onSelect={tab => setSelectedTab(tab)}
      >
        <StyledPageMotive />
        <StyledContainerWrapper>
          <StyledPageHeaderContainer>
            <StyledPageHeader>
              <StyledImage
                src="https://styles.redditmedia.com/t5_2u559/styles/communityIcon_x0d8uxqbsf411.png?width=256&s=840eac1453ccd2fb7592e113423ce57b17cbd976"
                alt="sub reddit logo"
              />
              <CommunityWrapper>
                <CommunityNameWrapper>
                  <StyledName>cybersecurity</StyledName>
                  <StyledMetaText>r/cybersecurity</StyledMetaText>
                </CommunityNameWrapper>
                <ButtonWrapper>
                  <Button style={{width: '96px', height: '32px'}}>Join</Button>
                </ButtonWrapper>
              </CommunityWrapper>
            </StyledPageHeader>
            <StyledTabs>
              <StyledTabsWrapper>
                <TabStyles selectedTab={selectedTab}>
                  <NavLink className="posts" eventKey="posts">
                    Posts
                  </NavLink>
                  <NavLink className="wiki" eventKey="wiki">
                    Wiki
                  </NavLink>
                </TabStyles>
              </StyledTabsWrapper>
            </StyledTabs>
          </StyledPageHeaderContainer>
        </StyledContainerWrapper>
        <StyledContentSection>
          <TabContent>
            <TabPane eventKey="posts">
              <Card padding="10px 12px" style={{ marginBottom: '16px' }}>
                <FilterWrapper>
                  <StyledPill active>
                    <FireIcon style={{ width: '20px', marginRight: '5px' }} />
                    Hot
                  </StyledPill>
                  <StyledPill>
                    <NewIcon style={{ width: '20px', marginRight: '5px' }} />
                    New
                  </StyledPill>
                  <StyledPill>
                    <TrendingIcon
                      style={{ width: '20px', marginRight: '5px' }}
                    />
                    Top
                  </StyledPill>
                </FilterWrapper>
              </Card>
              <PostList posts={posts} />
            </TabPane>
            <TabPane eventKey="wiki">
              <Wiki />
            </TabPane>
          </TabContent>
          <StyledSidebar>
            <SidebarPanel heading="About Community">
              <div>
                <div style={{ marginBottom: '8px', fontSize: '14px' }}>
                  Welcome to cybersecurity
                </div>
                <div style={{ display: 'flex', marginBottom: '12px' }}>
                  <div style={{ paddingRight: '4px', flex: 'auto' }}>
                    <div
                      style={{
                        fontSize: '16px',
                        fontWeight: 500,
                        lineHeight: '20px',
                      }}
                    >
                      {humanize(256505, n => parseInt(n, 10))}
                    </div>
                    <p style={{ fontSize: '12px' }}>Members</p>
                  </div>
                  <div style={{ paddingRight: '4px', flex: 'auto' }}>
                    <div
                      style={{
                        fontSize: '16px',
                        fontWeight: 500,
                        lineHeight: '20px',
                      }}
                    >
                      {humanize(544, n => parseInt(n, 10))}
                    </div>
                    <p style={{ fontSize: '12px' }}>Online</p>
                  </div>
                </div>
                <hr
                  style={{
                    backgroundColor: `${theme.line}`,
                    border: 'none',
                    height: '1px',
                    margin: '16px 0',
                  }}
                />
                <div style={{fontSize: '14px'}}>Created May 20, 2010</div>
              </div>
            </SidebarPanel>
          </StyledSidebar>
        </StyledContentSection>
      </TabContainer>
    </>
  );
}

SubReddit.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loadSubReddit: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  posts: PropTypes.array,
};

const mapStateToProps = state => ({
  posts: selectPosts(state),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    loadSubReddit,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  withTheme,
  memo,
)(SubReddit);
