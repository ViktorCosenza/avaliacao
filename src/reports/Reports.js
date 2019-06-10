import React from 'react'
import './Reports.css'

import Comment from './Comment'

class Reports extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      comments: this.props.comments
    }
  }

  render () {
    return (
      <div className='comments-container'>
        <div className='comment-list'>
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
        <div className='new-comment'>
          Type your comment here!
        </div>
      </div>
    )
  }
}

export default Reports
