import React from 'react'

class MenuItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: this.props.name,
      value: this.props.value,
      color: this.props.color
    }
  }

  render () {
    return (
      <a href='#' className='item'>
        {this.state.name}
      </a>
    )
  }
}

export default MenuItem
