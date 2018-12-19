import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import Login from './loginC'
import Signup from './signupC'
import Contact from './contactC'
import Overview from './overviewC'
import logo from '../logo.svg'

class Navbar extends Component {
  state = {}
  render() {
    return (
      <div>
      <div className="nav">
        <img src={logo} className="logo" alt="img not found" />
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
          <li>
            <Link to="/overview">Overview</Link>
          </li>
        </ul>
      </div>
      <div className="mainContainer">
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/contact" component={Contact} />
        <Route path="/overview" component={Overview} />
      </div>
      </div>
    )
  }
}

export default Navbar
