import React from 'react';

class ImageView extends React.Component{

    
    constructor(props) {    
        super(props);
      }

    render(){

        return(
            <div className="imageView">
                <img className="imgFile" src={this.props.content}/>
            </div>
        )
    }

}

export default ImageView;