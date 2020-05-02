import React from 'react';
import JSONObject from './jsonObject';

class JSONArray extends React.Component{

    isArray = (a) => {
        return (!!a) && (a.constructor === Array);
    }

    isObject = (o) => {
        return (!!o) && (o.constructor === Object);
    }

    isValueList = (a) => {
        for(var i of a){
            if(this.isArray(i) || this.isObject(i))
                return false;
        }
        return true;
    }

    render(){

        let styling = "accent";
        if(this.props.type === "input")
            styling = "normal";

        let arrayObject;

        // If this is just an array of values, it can be displayed inline
        if(this.isValueList(this.props.array) === true){
            console.log("ggjjkaz");
            arrayObject = <span className="jsonValue">{'[' + this.props.array.map(val => `${val}`) + ']'}</span>;
        }

        // Otherwise each sub-array/sub-object will be rendered beneath
        else{

            let level = parseInt(this.props.level);
            if(isNaN(level))
                level = 0

            let styling = "normalText";
                if(this.props.type === "input")
                    styling = "accentText";

            arrayObject = this.props.array.map((val,key) => {
                if(this.isArray(val)){
                    return <JSONArray key={key} level={level} itemKey={key} array={val} type={this.props.type}/>;
                }
                if(this.isObject(val)){
                    return <div key={key} className={`${styling}`}>{`{`}<JSONObject level={level+1} obj={val} type={this.props.type}/>{`}`}</div>;
                }
                else{
                    return <span>{val}, </span>
                }
            })

            //arrayObject = "[" + arrayObject + "]";

        }

        return(
        <div className='jsonElementOuter'>
            <span className={`jsonElementInner ${styling}`}>
                <span className="jsonKey">{this.props.itemKey}</span> {arrayObject}
            </span>
        </div>
        )
    }

}

export default JSONArray;