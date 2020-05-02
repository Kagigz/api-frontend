import React from 'react';

class FilePanel extends React.Component{

    render(){

        let iconPath = "imgs/";

        switch(this.props.extension){
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

        return(
        <div className="fileView">
            {this.props.fileName === "" ?
                <a href={this.props.content} download>
                    <img className="fileTypeImgResult" alt={`${this.props.extension} file`} src={iconPath}/>
                </a> :
                <a href={this.props.content} download={this.props.fileName}>
                    <img className="fileTypeImgResult" alt={`${this.props.extension} file`} src={iconPath}/>
                </a>
            }
        </div>
        )
    }

}

export default FilePanel;