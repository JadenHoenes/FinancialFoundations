import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import Login from './components/login'
import Signup from './components/signup'
import Contact from './components/contact'
import Overview from './components/overview'
import Home from './components/home'
import Footer from './components/footer'
import Navbar from './components/Navbar'
import Dashboard from './components/dashboard'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="pusher">
        <Navbar home="active" />
        <Route path="/home" component={Home} />
        <div className="mainContainer">
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/contact" component={Contact} />
          <Route path="/overview" component={Overview} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
