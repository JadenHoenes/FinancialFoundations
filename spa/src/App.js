import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Link } from 'react-router-dom';
import Login from './Login'
import Signup from './Signup'

class App extends Component {

  render() {
    return (
      <div className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign up</Link></li>
        </ul>

        <div className="mainContainer">
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
        </div>
      </div>
    )
  }
}

export default App
