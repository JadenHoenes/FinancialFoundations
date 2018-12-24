import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import AuthenticatedRoute from './components/AuthenticatedRoute'
import Login from './components/login'
import Signup from './components/signup'
import Contact from './components/contact'
import Overview from './components/overview'
import Home from './components/home'
import Footer from './components/footer'
import Navbar from './components/Navbar'
import Dashboard from './components/dashboard'
import Library from './components/library'
import './App.css'

class App extends Component {
  isAuthenticated = false;

  onAuthenticated(result) {
      this.isAuthenticated = result;
  }

  render() {
    return (
      <div className="pusher">
        <Navbar isAuthenticated={this.isAuthenticated} />
        <Route exact path="/" component={Home} />
        <div className="mainContainer">
          <Route path="/login" render={(props) => <Login {...props} onAuthenticated={result => this.onAuthenticated(result)} />} />
          <Route path="/signup" component={Signup} />
          <Route path="/contact" component={Contact} />
          <Route path="/overview" component={Overview} />
          <AuthenticatedRoute path="/dashboard" isAuthenticated={this.isAuthenticated} component={Dashboard} />
          <Route path="/library" component={Library} />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
