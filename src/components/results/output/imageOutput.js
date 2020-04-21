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

            <ImageView/>
        </div>
        )
    }

}

export default ImageOutput;