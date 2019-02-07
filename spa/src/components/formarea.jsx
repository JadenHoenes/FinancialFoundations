import React, {Component} from 'react'

class FormArea extends Component {
  state = {}
  render() {
    return (
      <div className={'field '.concat(this.props.className)}>
        <textarea
          className="ui left labeled input"
          placeholder={this.props.placeholder}
          name={this.props.name}
          style={this.props.style}
          value={this.state.value}
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

export default FormArea
