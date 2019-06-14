import React from 'react'
import './NewComment.css'
import axios from 'axios'

class NewComment extends React.Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    if (this.state.value === '') { return }
    const comment = {
      user: 'NAVER',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
      message: this.state.value,
      time: '2 mins ago'
    }
    axios.post('https://my-json-server.typicode.com/viktorcosenza/avaliacao/reports', { comment })
      .then(response => {
        if (response.status !== 201) { console.log('Oops... Got response status ' + response.status) }
      })
      .catch(err => console.log('Oh no :( ' + err))
    this.setState({ value: '' })
    this.props.onSubmit(comment)
  }

  render () {
    return (
      <form className='new-comment' onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={this.state.value}
          onChange={this.handleChange}
          placeholder='Type your comment here...'
        />
        <input type='submit' value='SEND' />
      </form>
    )
  }
}

export default NewComment
