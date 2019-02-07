import React, {Component} from 'react'
import {Redirect} from 'react-router'
import moment from 'moment'
import './dashboard.css'
import PlanningPriority from './planningpriority.jsx'
import OtherAnnualIncome from './otherannualincome'
import FormField from './formfield'
import FormArea from './formarea'
import Birthdays from './birthdays'
import Assets from './assets'
import Liabilities from './liabilities'
import Insurance from './insurance'
import Goals from './goals'
import ListForms from './listforms'
import Page from './page'
import Page1 from './page1'
import Page2 from './page2'

class NewClient extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onFieldChange = this.onFieldChange.bind(this)
    this.state = {currentPage: 0}
    this.pages = [
      <Page1 onFieldChange={this.onFieldChange} />,
      <Page2 onFieldChange={this.onFieldChange} />,
    ]
  }
  getPage(index) {
    return this.pages[index]
  }
  render() {
    return (
      <div className="pageContainer">
        <div className="flexbox col">
          {this.state.error ? (
            <div className="ui message error">{this.state.error.message}</div>
          ) : (
            ''
          )}
          {this.state.success ? (
            <Redirect to="/dashboard" />
          ) : (
            <Page onSubmit={this.onSubmit}>
              {this.getPage(this.state.currentPage)}
            </Page>
          )}
        </div>
      </div>
    )
  }

  onFieldChange(field) {
    console.log(field)
    var existing = this.state.sendToServer
    this.setState({sendToServer: {...existing, ...field}})
  }

  onClientBirthdateChange(date) {
    this.setState({clientbirthdate: date})
    this.setState({clientage: moment().diff(date, 'years')})
  }
  onSpouseBirthdateChange(date) {
    this.setState({spousebirthdate: date})
    this.setState({spouseage: moment().diff(date, 'years')})
  }

  // todo: write the back button logic

  onSubmit(e) {
    e.preventDefault()
    let nextPage = this.state.currentPage + 1
    this.setState({currentPage: nextPage})
    // todo: send to server
    // if client doesn't exist http.post
    // get client id back, store that in state?
    // else
    // http.put( client id )

    console.log(this.state)
  }
}

export default NewClient
