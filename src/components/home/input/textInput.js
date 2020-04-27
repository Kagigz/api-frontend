import React from 'react';

class TextInput extends React.Component{

    
    constructor(props) {    
        super(props);
      }

    render(){

        var placeholder = ""
        switch(this.props.inputType){
            case "text":
                placeholder = "Enter Text";
                break;
            case "json":
                placeholder = "Enter JSON";
                break;
            default:
                break;
        }

        return(
        <div className="textBlockWrapper">
            <input type="text" className="textBlockInput form-control" ref={this.props.refId} placeholder={placeholder} aria-label="text"/>
        </div>
        )
    }

}

export default TextInput;