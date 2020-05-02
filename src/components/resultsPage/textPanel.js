import React from 'react';
import JSONObject from './utils/jsonObject';

class TextPanel extends React.Component{


    render(){

        let content = "", styling1 = "", styling2 = "", id = "";

        try {
            if (this.props.format === "json"){
                styling1 = "code";
                let obj = this.props.content;
                if (this.props.type === "input"){
                    obj = JSON.parse(obj);
                }
                content = <JSONObject type={this.props.type} obj={obj}/>
            }
            else{
                content = this.props.content;
            }

            if (this.props.type === "input"){
                id = "textBlockResultInput";
                styling2 = "resultInput";
            }
            else{
                id = "textBlockResultOutput";
                styling2 = "resultOutput";
            }
        }
        catch(error){
            console.error(error);
        }

        return(
        <div>
            <div id={id} className={`textBlockResult ${styling1} ${styling2}`}>
                 {content}
            </div>
        </div>
        )
    }

}

export default TextPanel;