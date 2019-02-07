import React, {Component} from 'react'
import moment from 'moment'
import FormField from './formfield'

class Page1 extends Component {
  state = {}
  render() {
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
              name="clientfirstname"
              placeholder="Client First Name"
              onChange={field => this.props.onFieldChange(field)}
            />
            <FormField
              name="clientlastname"
              placeholder="Client Last Name"
              onChange={field => this.props.onFieldChange(field)}
            />
            <div className="field shrink">
              <input
                className="ui left labeled input"
                placeholder="Client Birthdate"
                type="date"
                name="clientbirthdate"
                value={this.state.clientbirthdate}
                onChange={e => {
                  var date = e.target.value
                  this.props.onFieldChange({clientbirthdate: date})
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
