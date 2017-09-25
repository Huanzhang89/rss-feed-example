import React, { Component } from 'react';
import styled from 'styled-components';

class Dashboard extends Component {
  render () {
    const Wrapper = styled.div`
      box-sizing: border-box;
      width: 80vw;
      height: 80vh;
      border: 2px solid black;
      margin: 0 auto;
    `
    return (
      <Wrapper>
        123
      </Wrapper>
    );
  }
};

export default styled(Dashboard)`

`;
