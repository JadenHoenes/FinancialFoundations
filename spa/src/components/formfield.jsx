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
          onChange={e => {
            let field = {}
            field[this.name] = e.target.value
            this.props.onChange(field)
          }}
        />
      </div>
    )
  }
}

export default FormField
