import React, {Component} from 'react'
import {NavLink, Link} from 'react-router-dom'
import './Navbar.css'
import LogoutButton from './LogoutButton'
import axios from 'axios'

class Navbar extends Component {
  state = {}
  constructor(props) {
    super(props)
    this.state = {
      contact: 'item',
      home: 'item',
      overview: 'item',
    }
  }

  render() {
    const auth = this.props.auth
    const name = this.state.username
    return (
      <div className="nav">
        <div className="ui inverted vertical center aligned segment">
          <div className="ui container">
            <div className="ui large secondary inverted pointing menu">
              <a href="/" className="toc item">
                <i className="sidebar icon" />
              </a>
              {auth.isAuthenticated ? (
                <NavLink
                  className="item"
                  activeClassName="active"
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              ) : (
                <NavLink exact className="item" activeClassName="active" to="/">
                  Home
                </NavLink>
              )}
              <NavLink className="item" activeClassName="active" to="/overview">
                Overview
              </NavLink>
              <NavLink className="item" activeClassName="active" to="/library">
                Library
              </NavLink>
              <NavLink className="item" activeClassName="active" to="/contact">
                Contact Us
              </NavLink>

              <div className="right item">
                {auth.isAuthenticated ? (
                  <h5 style={{margin: 'auto'}}>Welcome, {name}</h5>
                ) : (
                  <Link className="ui inverted button" to="/login">
                    Log in
                  </Link>
                )}
                {auth.isAuthenticated ? (
                  <LogoutButton auth={auth} />
                ) : (
                  <Link
                    className="ui inverted button"
                    style={{marginLeft: '0.5em'}}
                    to="/signup"
                  >
                    Sign up
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar
