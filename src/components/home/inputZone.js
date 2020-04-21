import React from 'react';

import URLInput from './input/urlInput'
import TextInput from './input/textInput'
import FileUpload from './input/fileUpload'
import Action from './action'

class InputZone extends React.Component{

    
    constructor(props) {    
        super(props);
        this.state = {
            url:"",
            text:"",
            files: [],
            uploading: false,
            uploadProgress: {},
            successfullUploaded: false
        };
        this.urlInputRef = React.createRef();
        this.textInputRef = React.createRef();
        this.fileInputRef = React.createRef();
      }

      onFilesAdded = (files) => {
        this.setState(prevState => ({
          files: prevState.files.concat(files)
        }));
      }

      clearFiles = () => {
          this.setState({files: []})
      }

      uploadFiles = () => {
        //this.setState({ uploadProgress: {}, uploading: true });
        //const promises = [];
        let urls = []
        this.state.files.forEach(file => {
          //promises.push(this.sendUploadRequest(file));
          //this.sendUploadRequest(file);
          urls.push(URL.createObjectURL(file))
          console.log(urls);
          
        });

        return urls
        // try {
        //   await Promise.all(promises);
      
        //   this.setState({ successfullUploaded: true, uploading: false });
        // } catch (e) {
        //   // Not Production ready! Do some error handling here instead...
        //   this.setState({ successfullUploaded: true, uploading: false });
        // }
      }

      sendUploadRequest(file) {
        //return new Promise((resolve, reject) => {
         const req = new XMLHttpRequest();
       
        //  req.upload.addEventListener("progress", event => {
        //   if (event.lengthComputable) {
        //    const copy = { ...this.state.uploadProgress };
        //    copy[file.name] = {
        //     state: "pending",
        //     percentage: (event.loaded / event.total) * 100
        //    };
        //    this.setState({ uploadProgress: copy });
        //   }
        //  });
          
        //  req.upload.addEventListener("load", event => {
        //   const copy = { ...this.state.uploadProgress };
        //   copy[file.name] = { state: "done", percentage: 100 };
        //   this.setState({ uploadProgress: copy });
        //   resolve(req.response);
        //  });
          
        //  req.upload.addEventListener("error", event => {
        //   const copy = { ...this.state.uploadProgress };
        //   copy[file.name] = { state: "error", percentage: 0 };
        //   this.setState({ uploadProgress: copy });
        //   reject(req.response);
        //  });
       
         const formData = new FormData();
         formData.append("file", file, file.name);
       
         req.open("POST", "http://localhost:8000/api/upload");
         let response = req.send(formData);
         console.log(response)
        //});
       }


    render(){

        return(
            <div id='input-zone'>
                <div id="input-wrapper">

                <div className='row no-gutters'>
                <div id="input" className='col-md-10 col-lg-8 offset-lg-2 offset-md-1'>
        
                    <div className='row'>
                    <div className='col-md-3'>Enter URL:</div>
                    <div className='col-md-9'><URLInput refId={this.urlInputRef}/></div>
                    </div>
                    <div className='row'>
                    <div className='col-md-3'>Or Upload Files:</div>
                    <div className='col-md-9'><FileUpload onFilesAdded={this.onFilesAdded} files={this.state.files} refId={this.fileInputRef}/></div>            
                    </div>
                </div>
                </div>
                
            </div>
        
            <div id='go'>
                <Action urlRef={this.urlInputRef} textRef={this.textInputRef} fileRef={this.fileInputRef} uploadFiles={this.uploadFiles} files={this.state.files}/>
            </div>
          </div>
        )
    }

}

export default InputZone;