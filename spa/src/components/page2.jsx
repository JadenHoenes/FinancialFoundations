import React, {Component} from 'react'
import moment from 'moment'
import FormField from './formfield'

class Page2 extends Component {
  state = {}
  render() {
    return (
      <div>
        <FormField
          name="spousefirstname"
          placeholder="Spouse First Name"
          onChange={field => this.props.onFieldChange(field)}
        />
        <FormField
          name="spouselastname"
          placeholder="Spouse Last Name"
          onChange={field => this.props.onFieldChange(field)}
        />
        <div className="field shrink">
          <input
            className="ui left labeled input"
            placeholder="Spouse Birthdate"
            type="date"
            name="spousebirthdate"
            value={this.state.spousebirthdate}
            onChange={e => {
              var date = e.target.value
              this.props.onFieldChange({spousebirthdate: date})
              this.setState({
                spouseage: moment().diff(date, 'years'),
              })
            }}
          />
          <p style={{marginTop: 10, marginBottom: 10}}>
            Age: {this.state.spouseage}
          </p>
        </div>{' '}
      </div>
    )
  }
}

export default Page2
