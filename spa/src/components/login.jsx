import React, {Component} from 'react'
import axios from 'axios'
import {Button} from 'semantic-ui-react'
import {Redirect} from 'react-router'

class Login extends Component {
  constructor(props) {
    super(props)
    this.loginUser = this.loginUser.bind(this)
    this.onAuthenticated = props.onAuthenticated
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
          <Redirect to="/dashboard" />
        ) : (
          <form className="ui form" onSubmit={this.loginUser}>
            <div className="field">
              <input
                className="ui left labeled input"
                placeholder="Email"
                type="text"
                name="email"
                value={this.state.email}
                onChange={e => this.onEmailChange(e.target.value)}
              />
            </div>
            <div className="field">
              <input
                className="ui left labeled input"
                placeholder="Password"
                type="password"
                name="password"
                value={this.state.password}
                onChange={e => this.onPasswordChange(e.target.value)}
              />
            </div>

            <Button type="submit" className="lButton">
              Login
            </Button>
          </form>
        )}
      </div>
    )
  }

  onEmailChange(email) {
    this.setState({email: email})
  }

  onPasswordChange(pass) {
    this.setState({password: pass})
  }

  loginUser(event) {
    event.preventDefault()

    const self = this
    axios
      .post('http://localhost:3000/api/users/login', {
        email: this.state.email,
        password: this.state.password,
      })
      .then(
        res => {
          this.onAuthenticated(true)
          self.setState({success: true})
        },
        function(res) {
          if (res.response) {
            self.setState({error: res.response.data.error})
          } else {
            self.setState({error: {message: 'Unable to log you in.'}})
          }
        },
      )
  }
}

export default Login
