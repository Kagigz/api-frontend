import React from 'react';

import URLInput from './urlInput'
import TextInput from './textInput'
import FileUpload from './fileUpload'
import Action from '../action'

class InputZone extends React.Component{

    
    constructor(props) {    
        super(props);
        this.state = {
            url: "",
            text: "",
            files: [],
            fileName: "",
            fileUploaded: false
        };
        this.urlInputRef = React.createRef();
        this.textInputRef = React.createRef();
        this.fileInputRef = React.createRef();
    }

    onFilesAdded = (files) => {
      this.setState(prevState => ({
        files: prevState.files.concat(files),
        fileName: files[0].name, fileUploaded: true
      }));
    }

    clearFiles = () => {
        this.setState({files: [], fileName: "", fileUploaded: false})
    }

    uploadFiles = () => {
      let url = URL.createObjectURL(this.state.files[0]);
      return url;
    }

    renderUI = (inputType) => {

      // Showing different input zone based on input type

      if (inputType === "text" || inputType === "json"){
        return (
            <div className='row'>
              <div className='col-md-10 offset-md-1'><TextInput refId={this.textInputRef} inputType={this.props.inputType}/></div>
            </div>
        )
      }

      else{
        return (
            <div>
              <div className='row'>
                <div className='col-md-3'>Enter URL:</div>
                <div className='col-md-9'><URLInput refId={this.urlInputRef} fileUploaded={this.state.fileUploaded} inputType={this.props.inputType}/></div>
              </div>
              <div className='row' id="fileUpload">
                <div className='col-md-3'>Or Upload File:</div>
                <div className='col-md-9'><FileUpload onFilesAdded={this.onFilesAdded} fileUploaded={this.state.fileUploaded} fileName={this.state.fileName} refId={this.fileInputRef} clearFiles={this.clearFiles}/></div>            
              </div>
            </div>
        )
      }

    }

    render(){
        return(
          <div id='input-zone'>
            <div id="input-wrapper">

                <div className='row no-gutters'>
                  <div id="input" className='accentBox col-md-10 col-lg-8 offset-lg-2 offset-md-1'>
                      <div className='title'>
                        INPUT
                      </div>
                      {this.renderUI(this.props.inputType)}
                  </div>
                </div>

            </div>
        
            <div id='go'>
                <Action inputType={this.props.inputType} urlRef={this.urlInputRef} textRef={this.textInputRef} fileRef={this.fileInputRef} uploadFiles={this.uploadFiles} files={this.state.files}/>
            </div>
          </div>
        )
    }

}

export default InputZone;