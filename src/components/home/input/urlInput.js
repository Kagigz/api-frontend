import React from 'react';

class URLInput extends React.Component{

    
    constructor(props) {    
        super(props);
        this.state = {
            url:""
        };
      }

    render(){

        return(
            <div id="urlInputWrapper" className="input">
                <input type="text" ref={this.props.refId} className="form-control" placeholder={`URL to ${process.env.REACT_APP_INPUT_TYPE} file`} aria-label="url" disabled={this.props.fileUploaded} />
            </div>
        )
    }

}

export default URLInput;