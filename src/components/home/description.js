import React from 'react';
import ReactMarkdown from 'react-markdown';

class Description extends React.Component{

    
    constructor(props) {    
        super(props);
      }

    render(){

        const description = "# API Demo\n This is a demo for an API"

        return(
        <div>
            <ReactMarkdown source={description} />
        </div>
        )
    }

}

export default Description;