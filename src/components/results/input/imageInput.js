import React from 'react';
import ImageView from '../imageView'

class ImageInput extends React.Component{

    
    constructor(props) {    
        super(props);
      }

    render(){

        return(
        <div>
            Image Input

            <ImageView mode={this.props.mode} content={this.props.content}/>
        </div>
        )
    }

}

export default ImageInput;