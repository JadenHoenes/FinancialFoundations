import React, {Component} from 'react'
import axios from 'axios'
import {Button} from 'semantic-ui-react'

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  render() {
    return (
      <div className="formContainer">
        <form className="ui form" onSubmit={e => this.onSubmit}>
          <div className="field">
            <input type="text" name="email" placeholder="Email" />
          </div>
          <div className="field">
            <input type="password" name="password" placeholder="Password" />
          </div>
          <Button type="submit">Sign up</Button>
        </form>
      </div>
    )
  }

  onSubmit(event) {
    event.preventDefault()
    console.log(event, this.state)
  }
}

export default Signup
