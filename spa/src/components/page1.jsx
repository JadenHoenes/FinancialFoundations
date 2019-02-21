import React, {Component} from 'react'
import moment from 'moment'
import FormField from './formfield'

class Page1 extends Component {
  constructor(props) {
    super(props)
    if (this.props.model) {
      this.state = {
        ...this.props.model,
        clientage: moment().diff(this.props.model.birthdate, 'years'),
      }
    } else {
      this.state = {firstName: '', lastName: '', birthdate: ''}
    }
    this.onChange = this.onChange.bind(this)
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <h2 className="welcome">Client Profile</h2>
        <div className="infoText margin50bottom">
          We can’t do anything for our clients until we have some basic facts.
          Fill out the client profile as completely as possible to start the
          Financial Foundations&trade; process with your client(s). You can also
          email a link for your clients to fill out the client profile ahead of
          time. Or at least to show them ahead of time what information you’ll
          be gathering.
        </div>
        <div className="flexbox row evenly">
          <div>
            <FormField
              name="firstName"
              placeholder="Client First Name"
              value={this.state.firstName}
              onChange={field => this.onChange(field)}
            />
            <FormField
              name="lastName"
              placeholder="Client Last Name"
              value={this.state.lastName}
              onChange={field => this.onChange(field)}
            />
            <div className="field shrink">
              <FormField
                className="ui left labeled input"
                placeholder="Client Birthdate"
                name="birthdate"
                type="date"
                value={moment(this.state.birthdate).format('YYYY-MM-DD')}
                onChange={field => {
                  this.onChange(field)
                  this.setState({
                    clientage: moment().diff(field.birthdate, 'years'),
                    birthdate: field.birthdate,
                  })
                }}
              />
              <p style={{marginTop: 10}}>Age: {this.state.clientage}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  onChange(field) {
    this.setState(field)
    this.props.onFieldChange(field)
  }
}

export default Page1
