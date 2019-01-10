import React, {Component} from 'react'
import {Redirect} from 'react-router'
import moment from 'moment'
import './dashboard.css'
import PlanningPriority from './planningpriority.jsx'
import OtherAnnualIncome from './otherannualincome'
import FormField from './formfield'
import Birthdays from './birthdays'
import Assets from './assets'
import Liabilities from './liabilities'
import Insurance from './insurance'
import Goals from './goals'

class NewClient extends Component {
  state = {}
  render() {
    return (
      <div className="pageContainer">
        <div className="flexbox col">
          {this.state.error ? (
            <div className="ui message error">{this.state.error.message}</div>
          ) : (
            ''
          )}
          {this.state.success ? (
            <Redirect to="/dashboard" />
          ) : (
            <form className="ui form" onSubmit={this.createClientUser}>
              <div>
                <h2 className="welcome">Client Profile</h2>
                <div className="infoText margin50bottom">
                  We can’t do anything for our clients until we have some basic
                  facts. Fill out the client profile as completely as possible
                  to start the Financial Foundations&trade; process with your
                  client(s). You can also email a link for your clients to fill
                  out the client profile ahead of time. Or at least to show them
                  ahead of time what information you’ll be gathering.
                </div>
              </div>
              <div className="flexbox row evenly">
                <div>
                  <FormField
                    name="clientfirstname"
                    placeholder="Client First Name"
                  />
                  <FormField
                    name="clientlastname"
                    placeholder="Client Last Name"
                  />
                  <div className="field shrink">
                    <input
                      className="ui left labeled input"
                      placeholder="Client Birthdate"
                      type="date"
                      name="clientbirthdate"
                      value={this.state.clientbirthdate}
                      onChange={e =>
                        this.onClientBirthdateChange(e.target.value)
                      }
                    />
                    <p style={{marginTop: 10}}>Age: {this.state.clientage}</p>
                  </div>
                </div>
                <div>
                  <FormField
                    name="spousefirstname"
                    placeholder="Spouse First Name"
                  />
                  <FormField
                    name="spousefirstname"
                    placeholder="Spouse First Name"
                  />
                  <div className="field shrink">
                    <input
                      className="ui left labeled input"
                      placeholder="Spouse Birthdate"
                      type="date"
                      name="spousebirthdate"
                      value={this.state.spousebirthdate}
                      onChange={e =>
                        this.onSpouseBirthdateChange(e.target.value)
                      }
                    />
                    <p style={{marginTop: 10, marginBottom: 10}}>
                      Age: {this.state.spouseage}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="welcome">Primary Financial Goals</h3>
                <div className="infoText margin20bottom">
                  Foremost among all the information gathered from your clients
                  are their top financial priorities. List here the goals,
                  concerns, and topics that are most important to your clients,
                  the matters that first come to mind.
                </div>
              </div>
              <div>
                <FormField
                  name="primarygoals"
                  placeholder="Primary Goals"
                  className="centered horizontal"
                  style={{width: '50%'}}
                />
                <div className="flexbox row">
                  <div className="flexbox col">
                    <PlanningPriority name="Life Insurance Planning" />
                    <PlanningPriority name="Retirement Planning" />
                    <PlanningPriority name="Estate Planning and Preservation" />
                    <PlanningPriority name="College Funding, Weddigs, Missions" />
                    <PlanningPriority name="Creating Emergency Funds" />
                    <PlanningPriority name="Long-term Care Planning" />
                    <PlanningPriority name="Pension Maximization" />
                    <PlanningPriority name="Risk Management" />
                    <PlanningPriority name="Tax Defferal" />
                    <PlanningPriority name="Tax Free Growth Options" />
                  </div>
                  <FormField
                    name="primarygoalsnote"
                    placeholder="Notes"
                    style={{width: '50%', marginLeft: 10}}
                  />
                </div>
              </div>
              <div>
                <h3 className="welcome">Income Streams</h3>
                <div className="infoText margin50bottom">
                  In the table below, please list the revenue your clients
                  receive from their job(s) in the form of monthly take home and
                  annual salary. Monthly take home is after tax. Annual salary
                  is before tax and other payroll deductions. Also, be sure to
                  list any other types of income they may receive.
                </div>
              </div>
              <div className="flexbox row evenly">
                <div>
                  <FormField
                    name="clientoccupation"
                    placeholder="Client Occupation"
                  />
                  <FormField
                    name="clientmonthlytakehome"
                    placeholder="Monthly Take Home"
                  />
                  <FormField name="clientsalary" placeholder="Annual Salary" />
                  {<OtherAnnualIncome />}
                </div>
                <div>
                  <FormField
                    name="spouseoccupation"
                    placeholder="Spouse Occupation"
                  />
                  <FormField
                    name="spousemonthlytakehome"
                    placeholder="Monthly Take Home"
                  />
                  <FormField name="spousesalary" placeholder="Annual Salary" />
                  {<OtherAnnualIncome />}
                </div>
              </div>
              <div>
                <h3 className="welcome">Birthdays</h3>
                <div className="infoText margin50bottom">
                  In order to analyze the life insurance, social security, and
                  retirement needs of your clients, you need to know the
                  birthdates and ages of the family members (or the ages at the
                  very least). List the birthdates and ages of each family
                  member that still resides at home in the fields below besides
                  the client and spouse (i.e. dependent children).
                </div>
              </div>
              <Birthdays />
              <div>
                <h3 className="welcome">Assets</h3>
                <div className="infoText margin50bottom">
                  List all the assets your clients own in the fields below.
                  Assets include things such as your retirement accounts (i.e.
                  401K’s / 403B’s, IRA’s, Pensions, etc.). Assets may also
                  include liquid savings in your bank, stocks, bonds, real
                  estate investments, and so on. In a nutshell, list anything
                  that you receive money from or are saving money in. (NOTE: not
                  every column applies to every type of asset. P.S. Your
                  client’s primary address is not an asset. If it’s not making
                  money or saving money don’t list it.)
                </div>
              </div>
              <Assets />
              <div>
                <h3 className="welcome">Liabilities (Debt)</h3>
                <div className="infoText margin50bottom">
                  In the fields below, list all the liabilities (i.e. debt) your
                  clients have—in other words, anything they are financing or
                  owe mon- ey on (i.e. home, cars, credit cards, student loans,
                  RV’s, ATV’s, etc.)
                </div>
              </div>
              <Liabilities />
              <div>
                <h3 className="welcome">Insurance</h3>
                <div className="infoText margin50bottom">
                  In the following table, please list all your insurance
                  expenses and coverage amounts, such as life insurance, auto
                  insurance, health insurance, home owner’s / renter’s
                  insurance, and so on.
                </div>
              </div>
              <Insurance />
              <div>
                <h3 className="welcome">Goals</h3>
                <div className="infoText margin50bottom">
                  Take some time to have your clients think through and discuss
                  each of the questions listed here. Make any needed notes.
                  These questions are not necessarily exhaustive, so any not
                  included here that your clients would like to address can be
                  in- cluded by adding an additional field afterward.
                </div>
              </div>
              <Goals />
            </form>
          )}
        </div>
      </div>
    )
  }

  onClientBirthdateChange(date) {
    this.setState({clientbirthdate: date})
    this.setState({clientage: moment().diff(date, 'years')})
  }
  onSpouseBirthdateChange(date) {
    this.setState({spousebirthdate: date})
    this.setState({spouseage: moment().diff(date, 'years')})
  }
}

export default NewClient
