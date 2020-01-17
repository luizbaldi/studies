import React, { Component, Fragment } from 'react';

/* Comments */
import CommentBox from './components/CommentBox'
import CommentList from './components/CommentList'

class App extends Component {
  render() {
    return (
      <Fragment>
        <CommentBox />
        <CommentList />
      </Fragment>
    );
  }
}

export default App;
