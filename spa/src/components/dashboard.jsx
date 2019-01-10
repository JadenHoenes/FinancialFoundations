import React, {Component} from 'react'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import './dashboard.css'

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="flexbox col">
          <h3 className="welcome">Welcome</h3>
          <div>
            The first step in the Financial FoundationsTM process is to create a
            client profile (aka: have a fact find) for your respective client.
            This will gather all the information you need to complete each step
            of the planning process with them. Afterwards, you’ll step through
            each aspect in it’s place and priority.
          </div>
          <div className="flexbox row evenly buttonRow">
            <Link className="ui button" to="/newclient">
              New Client Profile
            </Link>
            <Button>Existing Client Profiles</Button>
            <Button>Client Presentations</Button>
          </div>
          <div className="">
            <h3>Planning Tools Quick Links</h3>
            <div className="flexbox row evenly">
              <div>
                <ul>
                  <li>
                    <a>Life Insurance Needs Analysis Tool</a>
                  </li>
                  <li>
                    <a>Disability Protection Analysis Tool</a>
                  </li>
                  <li>
                    <a>Property & Casualty Coverage Tool</a>
                  </li>
                  <li>
                    <a>Health Insurance Coverage</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <a>Retirement Income Plan Optimizer</a>
                  </li>
                  <li>
                    <a>Tax-Free Retirement Calculator</a>
                  </li>
                  <li>
                    <a>Long-Term Care Calculator</a>
                  </li>
                  <li>
                    <a>Investment Tracker</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <a>Emerg. Fund / Debt Payoff Calculator</a>
                  </li>
                  <li>
                    <a>Mortgage Payoff Calculator</a>
                  </li>
                  <li>
                    <a>Social Sec. Optimization Calculator</a>
                  </li>
                  <li>
                    <a>Medicare Calculator</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
