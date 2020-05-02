import React from 'react';
import ReactMarkdown from 'react-markdown';

class Description extends React.Component{


    render(){

        const description = "# Image Transformation Demo\n This is a demo for an image transformation API. It returns the negative of the input image."

        return(
        <div>
            <ReactMarkdown source={description} />
        </div>
        )
    }

}

export default Description;