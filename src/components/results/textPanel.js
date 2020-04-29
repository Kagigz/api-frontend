import React from 'react';
import JSONObject from './jsonObject';

class TextPanel extends React.Component{


    render(){

        let content = "";
        let styling = ""
        //try {
            if (this.props.format === "json"){
                styling = "code";
                let obj = JSON.parse(this.props.content);
                content = <JSONObject type={this.props.type} obj={obj}/>
            }
        // }
        // catch(error){
        //     console.error("Cannot read props.");
        // }

        return(
        <div>
            <div id="textBlockResultInput" className={`textBlockResult resultInput ${styling}`}>
                 {content}
            </div>
        </div>
        )
    }

}

export default TextPanel;