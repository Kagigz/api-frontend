import React from 'react';
import ImageView from '../imageView'


class ImageOutput extends React.Component{

    
    constructor(props) {    
        super(props);
      }

    render(){

        return(
        <div>
            Image Output

            <ImageView  mode={this.props.mode} content={this.props.content}/>
        </div>
        )
    }

}

export default ImageOutput;