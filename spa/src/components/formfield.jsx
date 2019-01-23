import React, {Component} from 'react'

class FormField extends Component {
  state = {}
  className = ''
  constructor(props) {
    super(props)
    this.className = 'field' + this.props.className || ''
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
