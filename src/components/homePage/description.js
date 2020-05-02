import React from 'react';
import ReactMarkdown from 'react-markdown';

class Description extends React.Component{


    render(){

        const description = "# Sentiment Analysis Demo\n This is a demo for a sentiment analysis API. For each given document, a score representing the overall sentiment of the text is returned."

        return(
        <div>
            <ReactMarkdown source={description} />
        </div>
        )
    }

}

export default Description;