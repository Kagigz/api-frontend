import React from 'react';

class URLInput extends React.Component{

    
    constructor(props) {    
        super(props);
        this.state = {
            url:""
        };
      }

    render(){
        var placeholder = ""
        switch(this.props.inputType){
            case "image":
                placeholder = "URL to image file";
                break;
            case "file":
                placeholder = "File URL";
                break;
            default:
                break;
        }

        return(
            <div id="urlInputWrapper" className="input">
                <input type="text" ref={this.props.refId} className="form-control" placeholder={placeholder} aria-label="url" disabled={this.props.fileUploaded} />
            </div>
        )
    }

}

export default URLInput;