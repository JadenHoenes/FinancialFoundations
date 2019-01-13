import React, {Component} from 'react'

class FormField extends Component {
  state = {}
  className = ''
  constructor(props) {
    super(props)
    this.className = 'field' + this.props.className || '';
  }

  render() {
    return (
      <div className={this.className}>
        <input
          className="ui left labeled input"
          placeholder={this.props.placeholder}
          type="text"
          name={this.props.name}
          value={this.props.value}
          style={this.props.style}
          onChange={e =>
            this.props.onChange({name: this.props.name, value: e.target.value})
          }
        />
      </div>
    )
  }
}

export default FormField
