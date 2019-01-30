import React, {Component} from 'react'
import FormField from './formfield'
import ListForms from './listedcomponent'
import moment from 'moment'

class Liabilities extends Component {
  state = {}
  render() {
    return (
      <div className="flexbox col">
        <ListForms
          name="liability"
          baseComponent={<Liability />}
          addedComponent={<Liability key={'thing'.concat(moment.now())} />}
          buttonText="+"
        />
      </div>
    )
  }
  onFieldChange(field) {
    this.setState(field)
  }
}

class Liability extends Component {
  state = {}
  key = this.props.key
  render() {
    return (
      <div>
        <div className="flexbox row">
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="liabilitydesc"
            placeholder="Liability Description"
            style={{margin: 5}}
            className="shrink"
          />
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="presentbalance"
            placeholder="Present Balance"
            style={{margin: 5}}
          />
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="term"
            placeholder="Term"
            style={{margin: 5}}
          />
        </div>
        <div className="flexbox row">
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="assetowner"
            placeholder="Owner of Asset"
            style={{margin: 5}}
          />
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="montlypayment"
            placeholder="Monthly Payment"
            style={{margin: 5}}
          />
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="interestrate"
            placeholder="Interest Rate"
            style={{margin: 5}}
          />
        </div>
      </div>
    )
  }
  onFieldChange(field) {
    this.setState(field)
  }
}

export default Liabilities
