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
        <form className='new-comment'>
          <input type='text' placeholder='Type your comment here...' />
          <input type='submit' value='SEND' />
        </form>
      </div>
    )
  }
}

export default Reports
