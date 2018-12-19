import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import Login from './components/login'
import Signup from './components/signup'
import Contact from './components/contact'
import Overview from './components/overview'
import Home from './components/home'
import Footer from './components/footer'
import './App.css'

class App extends Component {
  render() {
    return (

      <div class="pusher">
        <div class="ui inverted vertical masthead center aligned segment">

          <div class="ui container">
            <div class="ui large secondary inverted pointing menu">
              <a class="toc item">
                <i class="sidebar icon"></i>
              </a>

              <Link className="active item" to="/home">Home</Link>
              <Link className="item" to="/contact">Contact Us</Link>
              <Link className="item" to="/overview">Overview</Link>

              <div class="right item">
                <Link className="ui inverted button" to="/login">Log in</Link>
                <Link className="ui inverted button" to="/signup">Sign up</Link>
              </div>
            </div>
          </div>

          <div class="ui text container masthead">
            <h1 class="ui inverted header">
              Imagine-a-Company
            </h1>
            <h2>Do whatever you want when you want to.</h2>
            <div class="ui huge primary button">Get Started <i class="right arrow icon"></i></div>
          </div>

        </div>

        <div className="mainContainer">
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/contact" component={Contact} />
          <Route path="/overview" component={Overview} />
        </div>

        <Footer />

      </div>
    )
  }
}

export default App
