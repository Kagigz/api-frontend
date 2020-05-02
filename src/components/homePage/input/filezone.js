import React from 'react'

class FileZone extends React.Component {

  render() {

    let iconPath = "imgs/";
    let extension = this.props.fileName.split('.').pop();

    switch(extension){
      case "jpg":
        iconPath += "jpg";
        break;
      case "jpeg":
        iconPath += "jpg";
        break;
      case "png":
        iconPath += "png";
        break;
      case "gif":
        iconPath += "gif";
        break;
      case "csv":
        iconPath += "csv";
        break;
      case "xml":
        iconPath += "xml";
        break;
      case "mp3":
        iconPath += "mp3";
        break;
      case "wav":
        iconPath += "wav";
        break;
      case "mp4":
        iconPath += "mp4";
        break;
      case "pptx":
        iconPath += "pptx";
        break;
      case "ppt":
        iconPath += "pptx";
        break;
      case "docx":
        iconPath += "docx";
        break;
      case "doc":
        iconPath += "docx";
        break;
      case "xlsx":
        iconPath += "xlsx";
        break;
      case "xls":
        iconPath += "xlsx";
        break;
      case "txt":
        iconPath += "txt";
        break;
      case "json":
        iconPath += "json";
        break;
      case "pdf":
        iconPath += "pdf";
        break;
      default:
        iconPath += "generic";
        break;
    }

    iconPath += "-file.png";

    return (
        <div className={`biggerFont ${this.props.fileUploaded ? "" : "hidden"}`}>
            <img className="fileTypeImg" alt={`${extension} file`} src={iconPath}/>
            {this.props.fileName}
            <span className="cancelIcon clickable">
                <img onClick={this.props.clearFiles} alt="cancel" src="imgs/icons/cancel-icon.svg"/>
            </span>
        </div>
    )
  }
}

export default FileZone