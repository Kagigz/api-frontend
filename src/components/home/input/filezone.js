import React from 'react'

class FileZone extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className={`biggerFont ${this.props.fileUploaded ? "" : "hidden"}`}>
            <img className="fileTypeImg" alt="png file" src="imgs/png-file.png"/>
            {this.props.fileName}
            <span className="cancelIcon clickable">
                <img onClick={this.props.clearFiles} alt="cancel" src="imgs/icons/cancel-icon.svg"/>
            </span>
        </div>
    )
  }
}

export default FileZone