import React, { Component } from 'react';
import styled from 'styled-components';


const StyledContent= styled.div`
  flex: 2 1 0;
  overflow-y: auto;
`;

const FeedContent = styled.div`
  margin: 10px;
  border: 2px solid black;
`

const FeedUrl = styled.h1`
  margin: 0 auto;
`

export default class MainContent extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(prevState, nextProps) {

  }

  renderContent() {
    return this.props.feedData && this.props.feedData.items.map((item, index) => {
      return (
        <FeedContent key={index}>
          <span>{`${item.title} - ${item.pubDate}`}</span>
          <p>{item.content}</p>
        </FeedContent>
      )
    })
  }
  render() {

    return (
      <StyledContent>
        <FeedUrl>{this.props.feedData && this.props.feedData.feed.url}</FeedUrl>
        {this.renderContent()}
      </StyledContent>
    )
  }
}
