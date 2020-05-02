import React from 'react';

class ImagePanel extends React.Component{

    render(){

        return(
        <div className="imageView">
            <img className="imgFile" src={this.props.content} alt="result panel"/>
        </div>
        )
    }

}

export default ImagePanel;