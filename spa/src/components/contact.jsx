import React, {Component} from 'react'
import {Button} from 'semantic-ui-react'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.contactUs = this.contactUs.bind(this)
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
    }
  }

  onNameChange(name) {
    this.setState({name: name})
  }
  onEmailChange(email) {
    this.setState({email: email})
  }
  onSubjectChange(subj) {
    this.setState({subject: subj})
  }
  onMessageChange(mess) {
    this.setState({message: mess})
  }

  contactUs(event) {
    event.preventDefault()
    console.log(this.state)
    const self = this
    // todo: figure out email model?
  }

  render() {
    return (
      <div className="mainContainer">
        <div className="contactInfo">
          <p>Call us: 1-800-NUMBER</p>
          <p>Email us: service@financialfoudations.com</p>
          <p>Or fill out the form below: </p>
        </div>
        <div className="contactContainer">
          <form className="ui form" onSubmit={this.contactUs}>
            <div className="field">
              <input
                className="ui left labeled input"
                placeholder="Name"
                type="text"
                name="name"
                value={this.state.name}
                onChange={e => this.onNameChange(e.target.value)}
              />
            </div>
            <div className="field">
              <input
                className="ui left labeled input"
                placeholder="Email"
                type="text"
                name="email"
                value={this.state.email}
                onChange={e => this.onEmailChange(e.target.value)}
              />
            </div>
            <div className="field">
              <input
                className="ui left labeled input"
                placeholder="Subject"
                type="text"
                name="subject"
                value={this.state.subject}
                onChange={e => this.onSubjectChange(e.target.value)}
              />
            </div>
            <div className="field">
              <textarea
                className="ui left labeled input"
                placeholder="Message"
                type="text"
                name="message"
                value={this.state.message}
                onChange={e => this.onMessageChange(e.target.value)}
              />
            </div>
            <Button type="submit" className="lButton">
              Submit
            </Button>
          </form>
        </div>
      </div>
    )
  }
}

export default Contact
