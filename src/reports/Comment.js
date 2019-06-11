import React from 'react'
import './Comment.css'

class Comment extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: this.props.user,
      image: this.props.image || 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
      message: this.props.message || 'Voluptate consectetur commodo reprehenderit deserunt aliqua eiusmod fugiat nulla aute mollit anim id.',
      time: this.props.time || '3 mins ago'
    }
  }

  render () {
    return (
      <div className='comment'>
        <div
          className='avatar'
          style={{ backgroundImage: `url(${this.state.image})` }}
        />
        <div className='message'>
          <strong>Name </strong> <br />
          {this.state.message}
          <div className='time'>
            {this.state.time}
          </div>
        </div>
      </div>
    )
  }
}
export default Comment
