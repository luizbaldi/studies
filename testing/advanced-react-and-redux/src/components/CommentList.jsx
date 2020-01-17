import React, { Component } from 'react'
import { connect } from 'react-redux'

class CommentList extends Component {
  render () {
    const { comments } = this.props
    return (
      <div>
        {comments.length
          ? (
            <ul>
              {comments.map(({ text, id }) => <li key={id}>{text}</li>)}
            </ul>
          )
          : <i>Whops, seems like there's no comment yet :(</i>
        }

      </div>
    )
  }
}

const mapStateToProps = ({ comments }) => ({ comments })

export default connect(mapStateToProps)(CommentList)