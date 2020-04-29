import React from 'react';

class JSONArray extends React.Component{

    
    constructor(props) {    
        super(props);
      }

    render(){

        let styling = "accent";
        if(this.props.type == "input")
            styling = "normal";

        let arrayValues = '[' + this.props.array.map(val => `${val}`) + ']';

        return(
        <div className='jsonElementOuter'>
            <span className={`jsonElementInner ${styling}`}>
                <span className="jsonKey">{this.props.itemKey}</span> <span className="jsonValue">{arrayValues}</span>
            </span>
        </div>
        )
    }

}

export default JSONArray;