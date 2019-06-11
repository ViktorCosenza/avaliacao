import React from 'react'
import axios from 'axios'
import './Reports.css'

import Comment from './Comment'

class Reports extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      comments: 'Cant get comments'
    }
  }

  componentDidMount () {
    axios.get('https://my-json-server.typicode.com/viktorcosenza/avaliacao/reports')
      .then(response => {
        console.log(response)
        const comments = response.data.map(comment =>
          <Comment
            user={comment.user}
            image={comment.image}
            message={comment.message}
            time={comment.time}
          />
        )
        this.setState({ comments: comments })
      })
  }

  render () {
    return (
      <div className='comments-container'>
        <div className='comment-list'>
          {this.state.comments}
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
