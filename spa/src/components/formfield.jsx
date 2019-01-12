import React, {Component} from 'react'

class FormField extends Component {
  name = this.props.name
  state = {}
  render() {
    return (
      <div className={'field '.concat(this.props.className)}>
        <input
          className="ui left labeled input"
          placeholder={this.props.placeholder}
          type="text"
          name={this.name}
          style={this.props.style}
          value={this.state.name}
          onChange={e =>
            this.props.onChange({name: this.props.name, value: e.target.value})
          }
        />
      </div>
    )
  }
}

export default FormField
