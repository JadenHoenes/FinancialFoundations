import React, {Component} from 'react'
import Footer from './footer'
import Navbar from './Navbar'

class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar contact="active" />
        <p>ToDo contact form</p>
        <Footer />
      </div>
    )
  }
}

export default Contact
