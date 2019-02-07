import React, {Component} from 'react'
import FormField from './formfield'
import ListForms from './listforms'
import PlanningPriority from './planningpriority'
import moment from 'moment'

class Insurance extends Component {
  state = {}
  render() {
    return (
      <div className="flexbox col">
        <div>
          <h4 className="welcome">Life Insurance</h4>
          <ListForms
            name="lifepolicy"
            baseComponent={<LifePolicy />}
            addedComponent={<LifePolicy key={'thing'.concat(moment.now())} />}
            buttonText="+"
          />
        </div>
        <div>
          <h4 className="welcome">Disability Insurance</h4>
          <ListForms
            name="disabilitypolicy"
            baseComponent={<DisabilityPolicy />}
            addedComponent={
              <DisabilityPolicy key={'thing'.concat(moment.now())} />
            }
            buttonText="+"
          />
        </div>
        <div>
          <h4 className="welcome">Health Insurance</h4>
          <ListForms
            name="healthpolicy"
            baseComponent={<HealthPolicy />}
            addedComponent={<HealthPolicy key={'thing'.concat(moment.now())} />}
            buttonText="+"
          />
        </div>
        <div>
          <h4 className="welcome">Auto Insurance</h4>
          <ListForms
            name="autopolicy"
            baseComponent={<AutoPolicy />}
            addedComponent={<AutoPolicy key={'thing'.concat(moment.now())} />}
            buttonText="+"
          />
        </div>
        <div>
          <h4 className="welcome">Home Owner/Renter Insurance</h4>
          <ListForms
            name="homepolicy"
            baseComponent={<HomePolicy />}
            addedComponent={<HomePolicy key={'thing'.concat(moment.now())} />}
            buttonText="+"
          />
        </div>
      </div>
    )
  }
  onFieldChange(field) {
    this.setState(field)
  }
}

class LifePolicy extends Component {
  state = {}
  key = this.props.key
  render() {
    return (
      <div>
        <div className="flexbox row">
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="insuredname"
            placeholder="Insured's Name"
            style={{margin: 5}}
            className="shrink"
          />
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="type"
            placeholder="Type (i.e. term, whole life)"
            style={{margin: 5}}
          />
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="benefit"
            placeholder="Death Benefit"
            style={{margin: 5}}
          />
        </div>
        <div className="flexbox row">
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="carrier"
            placeholder="Carrier"
            style={{margin: 5}}
          />
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="premium"
            placeholder="Premium"
            style={{margin: 5}}
          />
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="term"
            placeholder="Term"
            style={{margin: 5}}
          />
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="issueyear"
            placeholder="Issue Year"
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

class DisabilityPolicy extends Component {
  state = {}
  key = this.props.key
  render() {
    return (
      <div>
        <div className="flexbox row">
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="insuredname"
            placeholder="Insured's Name"
            style={{margin: 5}}
            className="shrink"
          />
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="type"
            placeholder="Type (i.e. term, whole life)"
            style={{margin: 5}}
          />
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="benefitperiod"
            placeholder="Benefit Period"
            style={{margin: 5}}
          />
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="carrier"
            placeholder="Carrier"
            style={{margin: 5}}
          />
        </div>
        <div className="flexbox row">
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="premium"
            placeholder="Premium"
            style={{margin: 5}}
          />
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="eliminationperiod"
            placeholder="Elimination Period"
            style={{margin: 5}}
          />
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="benefitamount"
            placeholder="Benefit Amount"
            style={{margin: 5}}
          />
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="issueyear"
            placeholder="Issue Year"
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

class HealthPolicy extends Component {
  state = {}
  key = this.props.key
  render() {
    return (
      <div>
        <div className="flexbox row">
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="carrier"
            placeholder="Carrier"
            style={{margin: 5}}
            className="shrink"
          />
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="premium"
            placeholder="Premium"
            style={{margin: 5}}
          />
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="deductible"
            placeholder="Deductible"
            style={{margin: 5}}
          />
        </div>
        <div className="flexbox row">
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="coinsurance"
            placeholder="Coinsurance %"
            style={{margin: 5}}
          />
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="maxpocket"
            placeholder="Max Out of Pocket"
            style={{margin: 5}}
          />
          <p>Health Insurance Policy Covers</p>
          <p>Individual:</p>
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="individual"
            type="checkbox"
            placeholder="Interest Rate"
            style={{margin: 5}}
          />
          <p>Family:</p>
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="family"
            type="checkbox"
            placeholder="Monthly Payment"
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

class AutoPolicy extends Component {
  state = {}
  key = this.props.key
  render() {
    return (
      <div>
        <div className="flexbox row">
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="carrier"
            placeholder="Carrier"
            style={{margin: 5}}
            className="shrink"
          />
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="premium"
            placeholder="Premium"
            style={{margin: 5}}
          />
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="deductible"
            placeholder="Deductible"
            style={{margin: 5}}
          />
        </div>
        <div className="flexbox row">
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="minimumbodilyinjurt"
            placeholder="Minimum for Bodily Injury"
            style={{margin: 5}}
          />
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="vehicles"
            placeholder="# of Vehicles Covered"
            style={{margin: 5}}
          />
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="umbrella"
            placeholder="Umbrella Coverage"
            style={{margin: 5}}
          />
        </div>
        <div className="flexbox row">
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="bodilyinjurycoverage"
            placeholder="Bodily Injury Coverage"
            style={{margin: 5}}
          />
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="medicalcoverage"
            placeholder="Medical Coverage"
            style={{margin: 5}}
          />
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="uninsuredmotorist"
            placeholder="Uninsured Motorist Coverage"
            style={{margin: 5}}
          />
        </div>
        <div className="flexbox row">
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="compcovdeduct"
            placeholder="Comprehensive Coverage Deductible"
            style={{margin: 5}}
          />
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="collisiondeduct"
            placeholder="Collision Deductible"
            style={{margin: 5}}
          />
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="totalloss"
            placeholder="Total Loss Coverage"
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

class HomePolicy extends Component {
  state = {}
  key = this.props.key
  render() {
    return (
      <div>
        <div className="flexbox row">
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="carrier"
            placeholder="Carrier"
            style={{margin: 5}}
            className="shrink"
          />
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="premium"
            placeholder="Premium"
            style={{margin: 5}}
          />
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="deductible"
            placeholder="Deductible"
            style={{margin: 5}}
          />
        </div>
        <div className="flexbox row">
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="type"
            placeholder="Home Owners or Renters"
            style={{margin: 5}}
          />
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="escrow"
            placeholder="Paid Through Escrow?"
            style={{margin: 5}}
          />
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="yearbuilt"
            placeholder="Year Built"
            style={{margin: 5}}
          />
        </div>
        <div className="flexbox row">
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="yearsowned"
            placeholder="# of Years Owned"
            style={{margin: 5}}
            className="shrink"
          />
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="sqfeet"
            placeholder="Square Feet"
            style={{margin: 5}}
          />
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="extmaterial"
            placeholder="Exterior Material"
            style={{margin: 5}}
          />
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="wallmat"
            placeholder="Wall Material"
            style={{margin: 5}}
            className="shrink"
          />
        </div>
        <div className="flexbox row">
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="ceilingmat"
            placeholder="Ceiling Material"
            style={{margin: 5}}
            className="shrink"
          />
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="floormat"
            placeholder="Floor Material"
            style={{margin: 5}}
          />
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="roofmat"
            placeholder="Roof Material"
            style={{margin: 5}}
          />
          <FormField
            onChange={field => this.onFieldChange(field)}
            name="amenities"
            placeholder="Any Special Amenities"
            style={{margin: 5}}
            className="shrink"
          />
        </div>
        <h4 className="welcome">
          Home Owner/Renter Insurance Do you have any of the following?
        </h4>
        <div className="flexbox col">
          <div className="flexbox row">
            <PlanningPriority name="Bussiness at Home" />
            <PlanningPriority name="Swimming Pool" />
            <PlanningPriority name="Garage" />
            <PlanningPriority name="Attatched Garage?" />
          </div>
          <div className="flexbox row">
            <PlanningPriority name="Number of Cars" />
            <PlanningPriority name="Number of Bedrooms" />
            <PlanningPriority name="Number of Stories" />
            <PlanningPriority name="Fireplace?" />
          </div>
          <div className="flexbox row">
            <PlanningPriority name="Porch?" />
            <PlanningPriority name="Burgler Alarm" />
            <PlanningPriority name="Monitored?" />
            <PlanningPriority name="Central heating/air?" />
            <PlanningPriority name="Own a bussiness?" />
          </div>
        </div>
      </div>
    )
  }
  onFieldChange(field) {
    this.setState(field)
  }
}

export default Insurance
