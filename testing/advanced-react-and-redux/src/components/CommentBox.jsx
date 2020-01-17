import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveComment } from '../actions'

class CommentBox extends Component {
  state = { commentInput: '' }

  onChange = ({ target }) => this.setState({ commentInput: target.value })

  onSubmit = (e) => {
    e.preventDefault()
    this.setState({ commentInput: '' })
    this.props.saveComment(this.state.commentInput)
  }

  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <textarea
          name="Comment box"
          value={this.state.commentInput}
          onChange={this.onChange}
          cols="30"
          rows="10"
          placeholder='Type your comments here'
        />
        <button onClick={this.onSubmit}>Submit comment</button>
      </form>
    )
  }
}

export default connect(null, { saveComment })(CommentBox)
