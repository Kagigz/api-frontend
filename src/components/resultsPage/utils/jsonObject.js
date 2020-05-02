import React from 'react';
import JSONElement from './jsonElement';
import JSONArray from './jsonArray';

class JSONObject extends React.Component{

    isArray = (a) => {
        return (!!a) && (a.constructor === Array);
    }

    isObject = (o) => {
        return (!!o) && (o.constructor === Object);
    }

    render(){

        let level = parseInt(this.props.level);
        if(isNaN(level))
            level = 0

        let jsonObject = Object.keys(this.props.obj).map(
            (key) => {
                if(this.isArray(this.props.obj[key])){
                    return <JSONArray key={key} level={level} itemKey={key} array={this.props.obj[key]} type={this.props.type}/>;
                }
                if(this.isObject(this.props.obj[key])){
                    return <JSONObject key={key} level={level+1} obj={this.props.obj[key]} type={this.props.type}/>;
                }
                else{
                    return <JSONElement key={key} level={level} itemKey={key} value={this.props.obj[key]} type={this.props.type}/>;
                }
            }
        )

        return(
        <div>
            {jsonObject}
        </div>
        )
    }

}

export default JSONObject;