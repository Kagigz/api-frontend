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
            <div id="urlInputWrapper">
                <input type="text" ref={this.props.refId} className="form-control" placeholder="URL (image, audio, video)" aria-label="url"/>
            </div>
        )
    }

}

export default URLInput;