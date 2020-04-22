import React from 'react';
import { Redirect } from 'react-router-dom';

class Action extends React.Component{

    
    constructor(props) {    
        super(props);
        this.state = {
            go: false,
            mode: 'url',
            content: '',
            imgData: ''
        }
    }


    validUrl = () => {
        try{
        if(this.props.urlRef.current.value != '')
            return true;
        }
        catch(e){
            console.error("URL input is not defined.")
        }
        return false;
    }

    validText = () => {
        try{
            if(this.props.textRef.current.value != '')
                return true;
        }
        catch(e){
            console.error("Text input is not defined.")
        }
        return false;
    }

    validFile = () => {

        try{
            if(this.props.files.length > 0)
                return true;
        }
        catch(e){
            console.error("File input is not defined.")
        }
        return false;
    }

    sendRequest = async () => {
        console.log("Send Request");
        if(this.validUrl()){
            console.log("Valid URL");
            let imgUrl = this.props.urlRef.current.value;
            console.log(`Image URL: ${imgUrl}`);
            let response = await fetch(imgUrl);
            let blob = await response.blob();

            console.log(response);
            
        
            let reader = new FileReader();
            
            reader.onload = () => {
                this.setState({go: true, mode: 'url', imgUrl: imgUrl, imgData: reader.result});
            }
            
            let imgData = reader.readAsArrayBuffer(blob);
                      
        }
        else if(this.validText()){
            console.log("Valid Text");
            this.setState({go: true, mode: 'text', content: 'text'});
        }
        else if(this.validFile()){
            let url = this.props.uploadFiles()[0];

            let file = this.props.files[0];

            let reader = new FileReader();
            reader.onload = () => {
                this.setState({go: true, mode: 'file', imgUrl: url, imgData: reader.result})
            }
           let file_str = reader.readAsArrayBuffer(file);
        }
        else{
            console.log("Please provide a valid input.")
        }
    
    }


    render(){

        console.log(this.state.content);

        return(
            <div id="btn-go" className='btn' onClick={this.sendRequest}>
                GO!
                {
                this.state.go ?
                    <Redirect to={{
                        pathname: 'loading',
                        state: {
                            mode: this.state.mode,
                            imgUrl: this.state.imgUrl,
                            imgData: this.state.imgData
                        }
                    }} /> 
                : ''}
            </div>
        )
    }

}

export default Action;