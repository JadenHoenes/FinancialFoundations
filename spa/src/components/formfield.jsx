import React, {Component} from 'react'

class FormField extends Component {
  state = {value: this.props.value}
  render() {
    return (
      <div className={'field '.concat(this.props.className)}>
        <input
          className="ui left labeled input"
          placeholder={this.props.placeholder}
          type="text"
          name={this.props.name}
          style={this.props.style}
          value={this.state.value}
          type={this.props.type}
          onChange={e => {
            let field = {}
            field[this.props.name] = e.target.value
            this.props.onChange(field)
          }}
        />
      </div>
    )
  }
}

export default FormField
