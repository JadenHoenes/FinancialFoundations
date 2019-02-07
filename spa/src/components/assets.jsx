import React, {Component} from 'react'
import FormField from './formfield'
import ListForms from './listforms'
import moment from 'moment'

class Asstes extends Component {
  state = {}
  render() {
    return (
      <div className="flexbox col">
        <FormField
          onChange={field => this.onFieldChange(field)}
          name="emergencysavings"
          placeholder="Emergency Savings Amount"
        />
        <ListForms
          name="thing"
          baseComponent={<Asset />}
          addedComponent={<Asset key={'thing'.concat(moment.now())} />}
          buttonText="+"
        />
      </div>
    )
  }
  onFieldChange(field) {
    this.setState(field)
  }
}

class Asset extends Component {
  state = {}
  key = this.props.key
  render() {
    return (
      <div>
        <div className="flexbox row">
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="assetdesc"
            placeholder="Asset Description"
            style={{margin: 5}}
            className="shrink"
          />
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="presentvalue"
            placeholder="Present Value/Balance"
            style={{margin: 5}}
          />
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="employermatch"
            placeholder="Employer Match"
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
            name="montlycontribution"
            placeholder="Monthly Contribution"
            style={{margin: 5}}
          />
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="percentformatch"
            placeholder="% Needed For Match"
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

export default Asstes
