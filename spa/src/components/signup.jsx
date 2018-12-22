import React, {Component} from 'react'
import axios from 'axios'
import {Button} from 'semantic-ui-react'

class Signup extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      email: '',
      password: '',
    }
  }

  render() {
    return (
      <div className="formContainer">
        {this.state.error ? (
          <div className="ui message error">{this.state.error.message}</div>
        ) : (
          ''
        )}
        {this.state.success ? (
          <div className="ui message success">
            Success! Please verify your email
          </div>
        ) : (
          <form className="ui form" onSubmit={this.onSubmit}>
            <div className="field">
              <input type="text" name="firstname" placeholder="First Name" />
            </div>
            <div className="field">
              <input type="text" name="lastname" placeholder="Last Name" />
            </div>
            <div className="field">
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={e => this.onEmailChange(e.target.value)}
              />
            </div>
            <div className="field">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={e => this.onPasswordChange(e.target.value)}
              />
            </div>
            <Button type="submit">Sign Up</Button>
          </form>
        )}
      </div>
    )
  }

  onEmailChange(email) {
    //this.state.email = email;
    this.setState({email: email})
  }

  onPasswordChange(pass) {
    //this.state.email = email;
    this.setState({password: pass})
  }

  onSubmit(event) {
    event.preventDefault()
    const self = this
    axios
      .post('http://localhost:3000/api/users', {
        // firstname: this.state.firstname,
        // lastname: this.state.lastname,
        email: this.state.email,
        password: this.state.password,
      })
      .then(
        function(res) {
          self.setState({success: true})
        },
        function(res) {
          self.setState({error: res.response.data.error})
        },
      )
  }
}

export default Signup
