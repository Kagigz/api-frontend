import React from 'react';
import ImageView from '../imageView'


class ImageOutput extends React.Component{

    
    constructor(props) {    
        super(props);
      }

    render(){

        return(
        <div>
            <div className="title">Image Output</div>

            <ImageView  mode={this.props.mode} content={this.props.content}/>
        </div>
        )
    }

}

export default ImageOutput;