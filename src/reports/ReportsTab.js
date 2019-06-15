import React from 'react'
import axios from 'axios'
import './ReportsTab.css'

import Comment from './Comment'
import NewComment from './NewComment'

class ReportsTab extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      comments: []
    }
    this.lastReport = React.createRef()
    this.scrollToBottom = this.scrollToBottom.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  scrollToBottom () {
    this.lastReport.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }

  componentDidMount () {
    axios.get('https://my-json-server.typicode.com/viktorcosenza/avaliacao/reports')
      .then(response => {
        this.setState({ comments: response.data })
      })
  }

  componentDidUpdate () {
    this.scrollToBottom()
  }

  handleSubmit (props) {
    const comments = this.state.comments
    comments.push({
      user: props.user,
      image: props.image,
      message: props.message,
      time: props.time
    })
    this.setState({ comments: comments })
  }

  render () {
    return (
      <div className='reports-container'>
        <div className='reports-list' ref={this.commentList}>
          {this.state.comments.map((comment, idx) =>
            <Comment
              key={idx}
              user={comment.user}
              image={comment.image}
              time={comment.time}
              message={comment.message}
            />
          )}
          <div ref={this.lastReport} />
        </div>
        <NewComment onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default ReportsTab
