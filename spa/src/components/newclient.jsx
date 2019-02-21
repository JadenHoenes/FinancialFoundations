import React, {Component} from 'react'
import {Redirect} from 'react-router'
import moment from 'moment'
import './dashboard.css'
import axios from 'axios'
import Page from './page'
import Page1 from './page1'
import Page2 from './page2'
import Page3 from './page3'

class NewClient extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onFieldChange = this.onFieldChange.bind(this)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {currentPage: 0}
    this.pages = [Page1, Page2, Page3]
  }
  getPage(index, model) {
    let MyPage = this.pages[index]
    return <MyPage onFieldChange={this.onFieldChange} model={model} />
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
            <Page
              onSubmit={this.onSubmit}
              onBack={this.previousPage}
              currentPage={this.state.currentPage}
            >
              {this.getPage(this.state.currentPage, this.state.sendToServer)}
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

  onSubmit(e) {
    e.preventDefault()
    console.log(this.state)
    if (this.state.sendToServer.id) {
      const self = this
      axios
        .put('http://localhost:3000/api/Clients', self.state.sendToServer)
        .then(
          res => {
            self.nextPage(res)
          },
          function(res) {
            if (res.response) {
              self.setState({error: res.response.data.error})
            } else {
              self.setState({error: {message: 'Unable to update client'}})
            }
          },
        )
    } else {
      const self = this
      axios
        .post('http://localhost:3000/api/Clients', self.state.sendToServer)
        .then(
          res => {
            self.nextPage(res)
          },
          function(res) {
            if (res.response) {
              self.setState({error: res.response.data.error})
            } else {
              self.setState({error: {message: 'Unable to create client'}})
            }
          },
        )
    }
  }

  nextPage(res) {
    let nextPage = this.state.currentPage + 1
    let success = nextPage >= this.pages.length
    this.setState({
      sendToServer: res.data,
      currentPage: nextPage,
      success: success,
    })
  }

  previousPage() {
    let nextPage = this.state.currentPage - 1
    this.setState({
      currentPage: nextPage,
    })
  }
}

export default NewClient
