import React from 'react'
import axios from 'axios'
import './Reports.css'

import Comment from './Comment'
import NewComment from './NewComment'

class Reports extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      comments: [
        <Comment
          key={0}
          user='Sales report App'
          image='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
          message='You got no Reports, Yay!'
          time=''
        />
      ]
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    axios.get('https://my-json-server.typicode.com/viktorcosenza/avaliacao/reports')
      .then(response => {
        const comments = response.data.map((comment, key) =>
          <Comment
            key={comment.id}
            user={comment.user}
            image={comment.image}
            message={comment.message}
            time={comment.time}
          />
        )
        this.setState({ comments: comments })
      })
  }

  handleSubmit (props) {
    const comments = this.state.comments
    console.log(comments)
    comments.push(
      <Comment
        key={comments.length + 1}
        user={props.user}
        image={props.image}
        message={props.message}
        time={props.time}
      />
    )
    this.setState({ comments: comments })
  }

  render () {
    return (
      <div className='comments-container'>
        <div className='comment-list'>
          {this.state.comments}
        </div>
        <NewComment onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default Reports
