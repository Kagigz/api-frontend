import React from 'react';
import JSONObject from '../jsonObject';

class TextInput extends React.Component{

    
    constructor(props) {    
        super(props);
      }

    render(){

        let title = "Text Input";
        let content = "";
        let styling = ""
        try {
            if (this.props.type === "json"){
                title = "JSON Input";
                styling = "code";
                let obj = JSON.parse(this.props.content);
                content = <JSONObject obj={obj}/>
            }
        }
        catch(error){
            console.error("Cannot read props.");
        }

        return(
        <div>
            <div className="title">{title}</div>
            <div id="textBlockResultInput" className={`textBlockResult resultInput ${styling}`}>
                 {content}
            </div>
        </div>
        )
    }

}

export default TextInput;