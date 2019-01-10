import React, {Component} from 'react'
import './dashboard.css'

class PlanningPriority extends Component {
  state = {}
  render() {
    return (
      <div className="field flexbox row" style={{margin: 5}}>
        <div style={{whiteSpace: 'nowrap'}}>{this.props.name}</div>
        <input
          className="ui left labeled input"
          type="checkbox"
          name={this.props.name}
          value={this.state.field}
          onChange={e => this.onFieldChange(e.target.value)}
          style={{position: 'relative', top: 5, left: 3}}
        />
      </div>
    )
  }

  onFieldChange(field) {
    let stateName = this.props.name.concat('Field')
    this.setState({stateName: field})
  }
}

export default PlanningPriority
