import React from 'react'

class Progress extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="progressBar">
        <div
          className="progress"
          style={{ width: this.props.progress + '%' }}
        />
      </div>
    )
  }
}

export default Progress