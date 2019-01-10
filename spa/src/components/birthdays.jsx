import React, {Component} from 'react'
import FormField from './formfield'

class Birthdays extends Component {
  state = {}
  render() {
    return (
      <div className="flexbox column">
        <div className="flexbox row">
          <FormField
            name="familymembersname"
            placeholder="Family Members Name"
          />
          <div>Birthdate</div>
          <div style={{marginLeft: 10}}>Age:</div>
        </div>
        <button type="button" className="ui button">
          Add Another
        </button>
      </div>
    )
  }
}

export default Birthdays
