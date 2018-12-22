import React, {Component} from 'react'
import {NavLink, Link} from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component {
  state = {}
  constructor(props) {
    super(props)
    this.state = {contact: 'item', home: 'item', overview: 'item'}
  }
  render() {
    return (
      <div className="nav">
        <div className="ui inverted vertical center aligned segment">
          <div className="ui container">
            <div className="ui large secondary inverted pointing menu">
              <a className="toc item">
                <i className="sidebar icon" />
              </a>

              <NavLink className="item" activeClassName="active" to="/home">
                Home
              </NavLink>
              <NavLink className="item" activeClassName="active" to="/contact">
                Contact Us
              </NavLink>
              <NavLink className="item" activeClassName="active" to="/overview">
                Overview
              </NavLink>

              <div className="right item">
                <Link className="ui inverted button" to="/login">
                  Log in
                </Link>
                <Link
                  className="ui inverted button"
                  style={{marginLeft: '0.5em'}}
                  to="/signup"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar
