import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import SideNav from './SideNav';
import MainContent from '../components/MainContent';

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 80vw;
  height: 80vh;
  border: 2px solid black;
  margin: 0 auto;
  display: flex;
`

class Dashboard extends Component {

  render () {
    console.log(this.props);
    return (
      <Wrapper>
        <SideNav />
        <MainContent feedData={this.props.currentFeed}/>
      </Wrapper>
    );
  }
};
export default connect(state => ({
  currentFeed: state.rssFeeds.currentFeed,
}),{})(Dashboard);
