import React, {Component} from 'react'

class OtherAnnualIncome extends Component {
  state = {numChildren: 1}
  id = 1
  render() {
    const children = []
    for (this.id = 1; this.id < this.state.numChildren; this.id += 1) {
      children.push(<OtherIncomeFields key={this.id} />)
    }
    return (
      <div className="flexbox col">
        <div className="field">
          <input
            className="ui left labeled input"
            placeholder="Other Income Name"
            type="text"
            name="otherincomename"
            value={this.state.spousemonthlytakehome}
            onChange={e => this.onSpouseMonthlyTakeHomeChange(e.target.value)}
          />
        </div>
        <div className="flexbox row">
          <div className="field">
            <input
              className="ui left labeled input"
              placeholder="Income Amount"
              type="text"
              key={this.id}
              name={'otherincomeamount'.concat(this.id)}
              value={this.state.otherincome}
              onChange={e => this.onOntherIncomeChange(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="ui add button"
            onClick={this.addChild()}
          >
            +
          </button>
        </div>
        <IncomeFieldsContainer />
      </div>
    )
  }

  addChild() {
    //this.setState({numChildren: this.state.numChildren + 1})
  }
}

const IncomeFieldsContainer = props => (
  <div className="incomeContainer">{props.children}</div>
)

const OtherIncomeFields = props => (
  <div className="flexbox col">
    <div>
      <div className="field">
        <input
          className="ui left labeled input"
          placeholder="Other Income Name"
          type="text"
          name="otherincomename"
          value={this.state.spousemonthlytakehome}
          onChange={e => this.onSpouseMonthlyTakeHomeChange(e.target.value)}
        />
      </div>
      <div className="field">
        <input
          className="ui left labeled input"
          placeholder="Income Amount"
          type="text"
          key={this.id}
          name={'otherincomeamount'.concat(this.id)}
          value={this.state.otherincome}
          onChange={e => this.onOntherIncomeChange(e.target.value)}
        />
      </div>
    </div>
  </div>
)

export default OtherAnnualIncome
