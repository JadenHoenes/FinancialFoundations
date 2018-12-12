import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'

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
      <div className="App">
        <section>
          <form onSubmit={this.loginUser}>
            <fieldset>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={e => this.onEmailChange(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={e => this.onPasswordChange(e.target.value)}
                />
              </div>
              <div>
                <button type="submit">Login</button>
              </div>
            </fieldset>
          </form>
        </section>
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
