import React, {Component} from 'react'
import FormArea from './formarea'
import PlanningPriority from './planningpriority'

class Page3 extends Component {
  state = {}
  render() {
    return (
      <div className="flexbox col">
        <h3 className="welcome">Primary Financial Goals</h3>
        <div className="infoText margin20bottom">
          Foremost among all the information gathered from your clients are
          their top financial priorities. List here the goals, concerns, and
          topics that are most important to your clients, the matters that first
          come to mind.
        </div>
        <div>
          <div>
            <FormArea
              name="primarygoals"
              placeholder="Primary Goals"
              className="centered horizontal"
              style={{width: '50%'}}
              onChange={field => this.onFieldChange(field)}
            />
          </div>
          <div>
            <div>
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
              <FormArea
                name="primarygoalsnote"
                placeholder="Notes"
                style={{marginLeft: 10}}
                onChange={field => this.onFieldChange(field)}
                style={{width: '50%'}}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Page3
