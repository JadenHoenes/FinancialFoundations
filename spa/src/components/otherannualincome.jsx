import React, {Component} from 'react'
import FormField from './formfield'

class OtherAnnualIncome extends Component {
  state = {otherIncome: [{name: 'first income', income: 123040}]}
  render() {
    const componentsToRender = []
    for (var i = 0; i < this.state.otherIncome.length; i += 1) {
      componentsToRender.push(
        <OtherIncomeFields
          key={this.props.owner + i}
          index={i}
          owner={this.props.owner}
          otherIncome={this.state.otherIncome[i]}
          onIncomeChanged={income => this.onIncomeChanged(income)}
        />,
      )
    }
    return (
      <div className="flexbox col">
        {componentsToRender}
        <button
          className="ui button"
          type="button"
          onClick={e => this.addChild(e)}
        >
          +
        </button>
      </div>
    )
  }

  onIncomeChanged(income) {
    // loop through other income,
    // find the income you are working on (either by index or object reference
    // update that income object
    let otherIncome = this.state.otherIncome[income.index]
    otherIncome.name = income.name
    otherIncome.income = income.income
    console.log(otherIncome)
  }

  addChild() {
    console.log('addchild')
    const otherIncome = this.state.otherIncome
    otherIncome.push({name: 'thing', income: 0})
    this.setState({
      otherIncome: otherIncome,
    })
  }
}

const IncomeFieldsContainer = props => (
  <div className="incomeContainer">{props.children}</div>
)

class OtherIncomeFields extends Component {
  state = {}
  render() {
    return (
      <div>
        <FormField
          name="incomename"
          placeholder="Income Name"
          onChange={field => this.onFieldChange(field)}
        />
        <FormField
          name="incomevalue"
          placeholder="Income Value"
          onChange={field => this.onFieldChange(field)}
        />
      </div>
    )
  }
  onFieldChange(field) {
    this.setState(field)
    console.log(field, this.state)
    debugger
    // todo: we need better codes....

    let income = {}
    income.index = this.props.index
    income.name = this.state.incomename
    income.income = this.state.incomevalue
    this.props.onIncomeChanged(income)
  }
}

export default OtherAnnualIncome
