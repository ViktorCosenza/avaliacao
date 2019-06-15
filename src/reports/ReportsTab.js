import React from 'react'
import axios from 'axios'
import './ReportsTab.css'

import Report from './Report'
import NewReport from './NewReport'

class ReportsTab extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      reports: []
    }
    this.lastReport = React.createRef()
    this.scrollToBottom = this.scrollToBottom.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  scrollToBottom () {
    this.lastReport.current.scrollIntoView({ behavior: 'instant', block: 'end' })
  }

  componentDidMount () {
    axios.get('https://my-json-server.typicode.com/viktorcosenza/avaliacao/reports')
      .then(response => {
        this.setState({ reports: response.data })
      })
  }

  componentDidUpdate () {
    this.scrollToBottom()
  }

  handleSubmit (props) {
    const reports = this.state.reports
    reports.push({
      user: props.user,
      image: props.image,
      message: props.message,
      time: props.time
    })
    this.setState({ reports: reports })
  }

  render () {
    return (
      <div className='reports-container'>
        <div className='reports-list'>
          {this.state.reports.map((report, idx) =>
            <Report
              key={idx}
              user={report.user}
              image={report.image}
              time={report.time}
              message={report.message}
            />
          )}
          <div ref={this.lastReport} />
        </div>
        <NewReport onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default ReportsTab
