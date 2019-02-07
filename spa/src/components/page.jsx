import React, {Component} from 'react'

class Page extends Component {
  constructor(props) {
    super(props)
  }

  state = {}

  onSubmit(e) {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    const {onSubmit} = this.props

    return (
      <div>
        <form className="ui form" onSubmit={onSubmit}>
          {this.props.children}
          <div>
            <button>Back</button>
            <button className="ui buton" type="submit">
              Next
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Page
