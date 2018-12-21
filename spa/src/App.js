import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import Login from './components/login'
import Signup from './components/signup'
import Contact from './components/contact'
import Overview from './components/overview'
import Home from './components/home'
import Footer from './components/footer'
import Navbar from './components/Navbar'
import './App.css'

class App extends Component {
  render() {
    return (
      <div class="pusher">
        <div className="mainContainer">
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/contact" component={Contact} />
          <Route path="/overview" component={Overview} />
        </div>
      </div>
    )
  }
}

export default App
