import React from 'react'
import './MenuItem.css'

class MenuItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: this.props.name,
      value: this.props.value,
      color: this.props.color,
      icon: this.props.icon
    }
  }

  render () {
    return (
      <div className='item' style={{ backgroundColor: this.state.color }}>
        <div className='icon'> <i className={this.props.icon} /> </div>
        <div className='text'>
          <div className='title'>
            {this.state.name}
          </div>
          <div className='count'>
            {this.state.value}
          </div>
        </div>
      </div>
    )
  }
}

export default MenuItem
