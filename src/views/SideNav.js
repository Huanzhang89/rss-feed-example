import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { fetchFeed, removeFeed, getSelectedFeed } from '../redux/actions';


const Nav = styled.div`
  flex: 1 1 0;
  border-right: 1px solid black;
`;

const Search = styled.form`
  min-height: 50px;
  width: 100%;
  display: flex;
  margin: 0;
`;

const Input = styled.input`
  width: 70%;
  margin: 10px;
  border-radius: 5px;
  padding: 5px;
  font-size: 12px;
`;

const Button = styled.input`
  width: 30px;
  margin: 10px;
  border-radius: 5px;
  padding: 0;
  background: #fff url(https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/search-128.png) no-repeat;
  background-size: 25px 25px;
`;

const Feeds = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  overflow-y: auto;
`;

const Feed = styled.div`
  width: 90%;
  overflow: hidden;
  display: flex;
  padding: 5px;
  border: 1px solid black;
  margin: 10px auto;

  background-color: ${props => props.active ? 'grey' : 'none'};

  > div {
    margin-left: 20px;
  }

  > span {
    overflow: hidden;
    max-width: 240px;
  }
`

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      feedData: this.props.rssFeeds.rssFeed || [],
      active: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({url: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.fetchFeed(`https://api.rss2json.com/v1/api.json?rss_url=` + this.state.url);

  }

  renderFeeds(feeds) {
    return feeds && feeds.map((feedData, index) => {
      return <Feed key={index} active={index === this.state.active ? true : false} onClick={()=>this.setState({active: index})}>
        <Link to={{hash: '#' + index}} onClick={() => this.props.getSelectedFeed(feedData)}>
          {feedData.feed.url}
        </Link>
        <div key={index} onClick={() => {this.props.removeFeed(feedData)}}>
          x
        </div>
      </Feed>
    })
  };

  componentWillReceiveProps(nextProps) {
    this.setState((prevState, nextProps) => {
      return {feedData: nextProps.rssFeeds.rssFeed}
    });
  }

  render() {
    return (
      <Nav>
        <Search onSubmit={this.handleSubmit}>
          <Input type="text" value={this.state.url} onChange={this.handleChange}/>
          <Button type="submit" value=''/>
        </Search>
        <Feeds>
          {this.renderFeeds(this.state.feedData)}
        </Feeds>
      </Nav>
    )
  }
}
export default connect(state => ({
  rssFeeds: state.rssFeeds
}), { fetchFeed, removeFeed, getSelectedFeed })(SideNav);
