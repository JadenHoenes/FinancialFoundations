import React, {Component} from 'react'
import moment from 'moment'
import FormField from './formfield'

class Page1 extends Component {
  state = {}
  render() {
    const model = this.props.model || {}
    console.log(model)
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
              value={model.firstName}
              onChange={field => this.props.onFieldChange(field)}
            />
            <FormField
              name="lastName"
              placeholder="Client Last Name"
              value={model.lastName}
              onChange={field => this.props.onFieldChange(field)}
            />
            <div className="field shrink">
              <input
                className="ui left labeled input"
                placeholder="Client Birthdate"
                type="date"
                name="birthdate"
                value={model.birthdate}
                onChange={e => {
                  var date = e.target.value
                  this.props.onFieldChange({birthdate: date})
                  this.setState({
                    clientage: moment().diff(date, 'years'),
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
}

export default Page1
