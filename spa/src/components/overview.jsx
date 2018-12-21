import React, {Component} from 'react'
import Footer from './footer'
import Navbar from './Navbar'

class Overview extends Component {
  render() {
    return (
      <div>
        <Navbar overview="active item" />
        <p>ToDo overview page</p>
        <Footer />
      </div>
    )
  }
}

export default Overview
