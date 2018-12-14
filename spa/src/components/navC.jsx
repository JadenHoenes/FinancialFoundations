import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import Login from './loginC'
import Signup from './signupC'
import Contact from './contactC'

class Navbar extends Component {
  state = {}
  render() {
    return (
      <div className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>

        <div className="mainContainer">
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/contact" component={Contact} />
        </div>
      </div>
    )
  }
}

export default Navbar
