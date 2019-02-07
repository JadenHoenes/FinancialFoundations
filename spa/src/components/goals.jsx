import React, {Component} from 'react'
import FormArea from './formarea'
import ListForms from './listforms'
import moment from 'moment'

class Goals extends Component {
  state = {}
  render() {
    return (
      <div className="flexbox col">
        <div>
          <h4 className="welcome">
            When are you planning to retire or semi-retire?
          </h4>
          <FormArea
            onChange={field => this.onFieldChange(field)}
            name="estretiredate"
            placeholder="Notes:"
            style={{margin: 5}}
            className="shrink"
          />
        </div>
        <div>
          <h4 className="welcome">
            What type of retirement do you anticipate? How much income will you
            want/need annually?
          </h4>
          <FormArea
            onChange={field => this.onFieldChange(field)}
            name="retirementincome"
            placeholder="Notes:"
            style={{margin: 5}}
            className="shrink"
          />
        </div>
        <div>
          <h4 className="welcome">
            Do you have any major purchases that should be planned for?
          </h4>
          <FormArea
            onChange={field => this.onFieldChange(field)}
            name="majorpurchases"
            placeholder="Notes:"
            style={{margin: 5}}
            className="shrink"
          />
        </div>
        <div>
          <h4 className="welcome">
            What, if anything, are you doing to plan for your kids' education,
            weddings, misison, etc?
          </h4>
          <FormArea
            onChange={field => this.onFieldChange(field)}
            name="estretiredate"
            placeholder="Notes:"
            style={{margin: 5}}
            className="shrink"
          />
        </div>
        <ListForms
          name="othernotes"
          baseComponent={''}
          addedComponent={<Goal key={'thing'.concat(moment.now())} />}
          buttonText="+"
        />
      </div>
    )
  }
  onFieldChange(field) {
    this.setState(field)
  }
}

class Goal extends Component {
  state = {}
  render() {
    return (
      <FormArea
        onChange={field => this.onFieldChange(field)}
        name="othernotes"
        placeholder="Notes:"
        style={{margin: 5}}
        className="shrink"
      />
    )
  }
}

export default Goals
