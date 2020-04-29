import React from 'react';

class TextInput extends React.Component{

    render(){

        var placeholder = ""
        var styling = ""

        switch(this.props.inputType){
            case "text":
                placeholder = "Enter Text";
                break;
            case "json":
                placeholder = "Enter JSON";
                styling = "code";
                break;
            default:
                break;
        }

        return(
        <div className="textBlockWrapper">
            <textarea type="text" rows='12' className={`textBlockInput form-control ${styling}`} ref={this.props.refId} placeholder={placeholder} aria-label="text"/>
        </div>
        )
    }

}

export default TextInput;