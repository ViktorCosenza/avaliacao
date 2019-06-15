import React from 'react'
import './Report.css'

class Report extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: this.props.user,
      image: this.props.image,
      message: this.props.message,
      time: this.props.time
    }
  }

  render () {
    return (
      <div className='report'>
        <div
          className='avatar'
          style={{ backgroundImage: `url(${this.state.image})` }}
        />
        <div className='message'>
          <strong> {this.state.user} </strong> <br />
          {this.state.message}
          <div className='time'>
            {this.state.time}
          </div>
        </div>
      </div>
    )
  }
}
export default Report
