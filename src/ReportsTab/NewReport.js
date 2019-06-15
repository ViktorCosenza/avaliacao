import React from 'react'
import './NewReport.css'
import axios from 'axios'

class NewReport extends React.Component {
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
    const report = {
      user: 'NAVER',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
      message: this.state.value,
      time: '2 mins ago'
    }
    axios.post('https://my-json-server.typicode.com/viktorcosenza/avaliacao/reports', { report })
      .then(response => {
        if (response.status !== 201) { console.log('Oops... Got response status ' + response.status) }
      })
      .catch(err => console.log('Oh no :( ' + err))
    this.setState({ value: '' })
    this.props.onSubmit(report)
  }

  render () {
    return (
      <form className='new-report' onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={this.state.value}
          onChange={this.handleChange}
          placeholder='Type your report here...'
        />
        <input type='submit' value='SEND' />
      </form>
    )
  }
}

export default NewReport
