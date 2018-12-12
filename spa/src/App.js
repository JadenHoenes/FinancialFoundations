import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import { Button } from 'semantic-ui-react'

class App extends Component {
  constructor(props) {
    super(props)
    this.loginUser = this.loginUser.bind(this)
    this.state = {
      email: '',
      password: '',
    }
  }

  render() {
    return (
          <div className="formContainer">
          <form className="ui form" onSubmit={this.loginUser}>
              <div className="field">
                <label>Email</label>
                <input className="ui left labeled input"
                  placeholder="Enter your email address"
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={e => this.onEmailChange(e.target.value)}
                />
              </div>
              <div className="field">
                <label>Password</label>
                <input className="ui left labeled input"
                  placeholder="Enter your password"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={e => this.onPasswordChange(e.target.value)}
                />
              </div>

                <Button type="submit">Login</Button>

          </form>
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

  loginUser(event) {
    event.preventDefault()
    console.log(event, this.state)
    debugger
    axios
      .post('http://localhost:3000/api/users/login', {
        email: this.state.email,
        password: this.state.password,
      })
      .then(res => {
        console.log(res)
      })
  }
}

export default App
