import React from 'react';
import ImageView from '../imageView'

class ImageInput extends React.Component{

    
    constructor(props) {    
        super(props);
      }

    render(){

        return(
        <div>
            <div className="title">Image Input</div>

            <ImageView mode={this.props.mode} content={this.props.content}/>
        </div>
        )
    }

}

export default ImageInput;