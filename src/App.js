import React from 'react'
import './App.css'

import Menu from './Menu/Menu'
import Graph from './Graph/Graph'
import ReportsTab from './ReportsTab/ReportsTab'

function App () {
  return (
    <div className='App'>
      <header>
        Page Overview
      </header>
      <Menu />
      <div className='main-content'>

        <div className='graph'>
          <header>
            Site Traffic Overview
          </header>
          <Graph />
        </div>

        <div className='reports'>
          <header> Reports </header>
          <ReportsTab />
        </div>
      </div>
    </div>
  )
}

export default App
