import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Navbar extends Component {
  state = {}
  constructor(props) {
    super(props)
    this.state = {contact: 'item', home: 'item', overview: 'item'}
  }
  render() {
    return (
      <div className="">
        <div className="ui inverted vertical center aligned segment blueback">
          <div className="ui container">
            <div className="ui large secondary inverted pointing menu">
              <a className="toc item">
                <i className="sidebar icon" />
              </a>

              <Link className={this.state.home} to="/home">
                Home
              </Link>
              <Link className={this.state.contact} to="/contact">
                Contact Us
              </Link>
              <Link className={this.state.overview} to="/overview">
                Overview
              </Link>

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
