import React, {Component} from 'react'
import moment from 'moment'

class ListForms extends Component {
  state = {list: []}
  iterator = {}
  render() {
    const componentsToRender = this.state.list.map(list => {
      return <div key={list.toString()}>{this.props.addedComponent}</div>
    })
    return (
      <div className={this.props.className}>
        {this.props.baseComponent}
        {componentsToRender}
        <button
          type="button"
          className="ui button"
          onClick={e => this.addChild(e)}
        >
          {this.props.buttonText}
        </button>
      </div>
    )
  }

  iterator = 0

  addChild() {
    console.log(this.state)
    const list = this.state.list
    list.push({item: this.iterator})
    this.iterator += 1
    this.setState({list: list})
  }
}

export default ListForms
