import React from 'react';
import JSONObject from '../jsonObject';

class TextOutput extends React.Component{

    
    constructor(props) {    
        super(props);
      }

      render(){

        let title = "Text Output";
        let content = "";
        let styling = ""
        try {
            if (this.props.type === "json"){
                title = "JSON Output";
                styling = "code";
            }
            content = <JSONObject obj={this.props.content}/>
        }
        catch(error){
            console.error("Cannot read props.");
        }

        return(
        <div>
            <div className="title">{title}</div>
            <div id="textBlockResultOutput" className={`textBlockResult resultOutput ${styling}`}>
                 {content}
            </div>
        </div>
        )
    }

}

export default TextOutput;