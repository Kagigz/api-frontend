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
            fileName: "",
            fileUploaded: false,
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
          files: prevState.files.concat(files),
          fileName:files[0].name, fileUploaded: true
        }));
        //this.setState({fileName:files[0].name, fileUploaded: true})
      }

      clearFiles = () => {
          this.setState({files: [], fileName: "", fileUploaded: false})
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

    renderUI = (inputType) => {

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