import React, {Component} from 'react'
import FormField from './formfield'
import moment from 'moment'

class Birthdays extends Component {
  state = {birthdays: []}
  render() {
    const componentsToRender = this.state.birthdays.map(birthdays => {
      return (
        <Birthday
          key={this.state.id}
          owner={this.props.owner}
          birthday={birthdays}
          onBirthdayChanged={birthday => this.onBirthdayChanged(birthday)}
        />
      )
    })
    return (
      <div className="flexbox col">
        <div className="flexbox row">
          <FormField
            name="familymembersname"
            placeholder="Family Members Name"
          />
          <FormField
            name="birthdate"
            type="date"
            onChange={e => this.onDateChange(e)}
          />
          <div style={{marginLeft: 10}}>Age:</div>
        </div>
        {componentsToRender}
        <button
          type="button"
          className="ui button"
          onClick={e => this.addChild(e)}
        >
          Add Another
        </button>
      </div>
    )
  }
  onDateChange(date) {
    this.setState(date)
    this.setState({age: moment().diff(date, 'years')})
    console.log(this.state)
  }
  addChild() {
    console.log('add')
    const birthdays = this.state.birthdays
    birthdays.push({name: 'test', birthdate: '12-17-00'})
    this.setState({birthdays: birthdays})
  }
}

const BirthdayFieldsContainer = props => <div>{props.children}</div>

class Birthday extends Component {
  state = {}
  render() {
    return (
      <div className="flexbox row">
        <FormField
          name="familymembersname"
          placeholder="Family Members Name"
          onChange={this.onFieldChange}
        />
        <FormField
          name="birthdate"
          type="date"
          onChange={e => this.onDateChange(e)}
        />
        <div style={{marginLeft: 10}}>Age: {this.state.age}</div>
      </div>
    )
  }
  onFieldChange(field) {
    this.setState(field)
  }
  onDateChange(date) {
    this.setState(date)
    this.setState({age: moment().diff(date, 'years')})
    console.log(this.state)
  }
}

export default Birthdays
