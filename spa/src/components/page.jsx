import React, {Component} from 'react'

class Page extends Component {
  constructor(props) {
    super(props)
  }

  state = {}

  onSubmit(e) {
    e.preventDefault()
    //console.log(this.state)
  }

  render() {
    const {onSubmit, onBack, currentPage, model} = this.props

    return (
      <div>
        <form className="ui form" onSubmit={onSubmit}>
          {this.props.children}
          <div>
            {currentPage > 0 ? (
              <button className="ui button" type="button" onClick={onBack}>
                Back
              </button>
            ) : (
              ''
            )}
            <button className="ui button" type="submit">
              Next
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Page
