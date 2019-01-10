import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import AuthenticatedRoute from './components/AuthenticatedRoute.jsx'
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
import Cookies from 'universal-cookie'
import NewClient from './components/newclient.jsx'

const cookies = new Cookies()

class AuthService {
  isAuthenticated = false
  constructor() {
    this.isAuthenticated = cookies.get('ffauth')
  }

  onAuthenticated(result) {
    this.isAuthenticated = result
    cookies.set('ffauth', result, {path: '/'})
  }

  logout() {
    this.isAuthenticated = false
    cookies.set('ffauth', this.isAuthenticated, {path: '/'})
  }
}

class App extends Component {
  auth = new AuthService()

  render() {
    return (
      <div className="pusher">
        <Navbar auth={this.auth} />
        <Route exact path="/" component={Home} />
        <div className="mainContainer">
          <Route
            path="/login"
            render={props => (
              <Login
                {...props}
                onAuthenticated={result => this.auth.onAuthenticated(result)}
              />
            )}
          />
          <Route path="/signup" component={Signup} />
          <Route path="/contact" component={Contact} />
          <Route path="/overview" component={Overview} />
          <Route path="/library" component={Library} />
          <AuthenticatedRoute
            path="/dashboard"
            isAuthenticated={this.auth.isAuthenticated}
            component={Dashboard}
          />
          <AuthenticatedRoute
            path="/newclient"
            isAuthenticated={this.auth.isAuthenticated}
            component={NewClient}
          />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
