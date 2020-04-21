import React from 'react';

import Dropzone from './dropzone'
import FileZone from './filezone'
import Progress from './progress'

class FileUpload extends React.Component{

    
    constructor(props) {    
        super(props);
        this.state = {
            uploading: false,
            uploadProgress: {},
            successfullUploaded: false
          };

      }

      renderProgress = (file) => {
        const uploadProgress = this.state.uploadProgress[file.name];
        if (this.state.uploading || this.state.successfullUploaded) {
          return (
            <div className="progressWrapper">
              <Progress progress={uploadProgress ? uploadProgress.percentage : 0} />
              <img
                className="checkIcon"
                alt="done"
                src="check-icon.svg"
                style={{
                  opacity:
                    uploadProgress && uploadProgress.state === "done" ? 0.5 : 0
                }}
              />
            </div>
          );
        }
      }


      renderActions = () => {
        if (this.state.successfullUploaded) {
          return (
            <button
              onClick={() =>
                this.props.clearFiles()
              }
            >
              Clear
            </button>
          );
        }
      }


      uploadFiles = async () => {
        this.setState({ uploadProgress: {}, uploading: true });
        const promises = [];
        this.props.files.forEach(file => {
          promises.push(this.sendRequest(file));
        });
        try {
          await Promise.all(promises);
      
          this.setState({ successfullUploaded: true, uploading: false });
        } catch (e) {
          // Not Production ready! Do some error handling here instead...
          this.setState({ successfullUploaded: true, uploading: false });
        }
      }

      sendRequest(file) {
        return new Promise((resolve, reject) => {
         const req = new XMLHttpRequest();
       
         req.upload.addEventListener("progress", event => {
          if (event.lengthComputable) {
           const copy = { ...this.state.uploadProgress };
           copy[file.name] = {
            state: "pending",
            percentage: (event.loaded / event.total) * 100
           };
           this.setState({ uploadProgress: copy });
          }
         });
          
         req.upload.addEventListener("load", event => {
          const copy = { ...this.state.uploadProgress };
          copy[file.name] = { state: "done", percentage: 100 };
          this.setState({ uploadProgress: copy });
          resolve(req.response);
         });
          
         req.upload.addEventListener("error", event => {
          const copy = { ...this.state.uploadProgress };
          copy[file.name] = { state: "error", percentage: 0 };
          this.setState({ uploadProgress: copy });
          reject(req.response);
         });
       
         const formData = new FormData();
         formData.append("file", file, file.name);
       
         req.open("POST", "http://localhost:8000/api/upload");
         req.send(formData);
        });
       }

    render(){

        return(
            <div>
                <div className="upload">
                    <div className="content">

                      <FileZone fileName={this.props.fileName} clearFiles={this.props.clearFiles} fileUploaded={this.props.fileUploaded}/>
                      <Dropzone
                          onFilesAdded={this.props.onFilesAdded}
                          disabled={this.state.uploading || this.state.successfullUploaded}
                          refId={this.props.refId}
                          fileUploaded={this.props.fileUploaded}
                      />
                        
                    </div>
                    
                </div>
            </div>
        )
    }

}

export default FileUpload;