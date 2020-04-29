import React from 'react';

class JSONElement extends React.Component{

    render(){

        let styling = "accent";
        if(this.props.type === "input")
            styling = "normal";

        let tabs = [];
        for(var i=0; i<this.props.level; i++){
            tabs.push(<span key={i} className='tab'></span>);
        }

        return(
        <div className='jsonElementOuter'>
            {tabs}
            <span className={`jsonElementInner ${styling}`}>
                <span className="jsonKey">{this.props.itemKey}</span> <span className="jsonValue">{this.props.value}</span>
            </span>
        </div>
        )
    }

}

export default JSONElement;