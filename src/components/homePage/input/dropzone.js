import React from 'react';

class Dropzone extends React.Component{

    
    constructor(props) {    
        super(props);
        this.state = { hightlight: false }
      }


    openFileDialog = () => {
        if (this.props.disabled) return;
        this.props.refId.current.click();
    }

    fileListToArray = (list) => {
        const array = [];
        for (var i = 0; i < list.length; i++) {
          array.push(list.item(i));
        }
        return array;
     }

    onFilesAdded = (evt) => {
        if (this.props.disabled) return;
        const files = evt.target.files;
        if (this.props.onFilesAdded) {
          const array = this.fileListToArray(files);
          this.props.onFilesAdded(array);
        }
    }

    onDragOver = (evt) => {
        evt.preventDefault();
      
        if (this.props.disabled) return;
      
        this.setState({ hightlight: true });
    }

    onDragLeave = () => {
        this.setState({ hightlight: false });
    }

    onDrop = (event) => {
        event.preventDefault();
      
        if (this.props.disabled) return;
      
        const files = event.dataTransfer.files;
        if (this.props.onFilesAdded) {
          const array = this.fileListToArray(files);
          this.props.onFilesAdded(array);
        }
        this.setState({ hightlight: false });
    }

    render(){
        return(
            <div
                className={`input dropzone ${this.state.hightlight ? "dropzoneHighlight" : ""} ${this.props.fileUploaded ? "hidden": ""}`}
                onClick={this.openFileDialog}
                onDragOver={this.onDragOver}
                onDragLeave={this.onDragLeave}
                onDrop={this.onDrop}
                style={{ cursor: this.props.disabled ? "default" : "pointer" }}
            >
                <img
                    alt="upload"
                    className="icon"
                    src="imgs/icons/upload-icon.svg"
                />
                <input
                    ref={this.props.refId}
                    className="fileInput"
                    type="file"
                    onChange={this.onFilesAdded}
                />
            </div>
        )
    }

}

export default Dropzone;