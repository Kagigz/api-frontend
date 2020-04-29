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
        if(this.props.urlRef.current.value !== '')
            return true;
        }
        catch(e){
            console.error("URL input is not defined.")
        }
        return false;
    }

    validText = () => {
        try{
            if(this.props.textRef.current.value !== '')
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

    sendTextRequest = () => {
        let text = this.props.textRef.current.value;
        this.setState({go: true, mode: 'text', content: text});
    }

    sendJSONRequest = () => {
        let json = this.props.textRef.current.value;
        this.setState({go: true, mode: 'text', content: json});
    }

    sendImageURLRequest = async () => {
        let imgUrl = this.props.urlRef.current.value;
        console.log(`Image URL: ${imgUrl}`);
        let response = await fetch(imgUrl);
        let blob = await response.blob();

        console.log(response);
        
    
        let reader = new FileReader();
        
        reader.onload = () => {
            this.setState({go: true, mode: 'url', imgUrl: imgUrl, imgData: reader.result});
        }
        
        reader.readAsArrayBuffer(blob);
    }

    sendImageFileRequest = () => {
        let url = this.props.uploadFiles()[0];
        
        let file = this.props.files[0];

        let reader = new FileReader();
        reader.onload = () => {
            this.setState({go: true, mode: 'file', imgUrl: url, imgData: reader.result})
        }

        reader.readAsArrayBuffer(file);
    }

    sendFileURLRequest = async () => {
        let imgUrl = this.props.urlRef.current.value;
        console.log(`Image URL: ${imgUrl}`);
        let response = await fetch(imgUrl);
        let blob = await response.blob();

        console.log(response);
        
    
        let reader = new FileReader();
        
        reader.onload = () => {
            this.setState({go: true, mode: 'url', imgUrl: imgUrl, imgData: reader.result});
        }
        
        reader.readAsArrayBuffer(blob);
    }

    sendFileRequest = async () => {
        let url = this.props.uploadFiles()[0];
        
        let file = this.props.files[0];

        let reader = new FileReader();
        reader.onload = () => {
            this.setState({go: true, mode: 'file', imgUrl: url, imgData: reader.result})
        }

        reader.readAsArrayBuffer(file);
    }

    sendRequest = async () => {
        console.log("Send Request");

        switch(this.props.inputType){
            case("text"):
                if(this.validText()){
                    this.sendTextRequest();
                }
                else{
                    console.error("No text was entered");
                }
                break;
            case("json"):
                if(this.validText()){
                    this.sendJSONRequest();
                }
                else{
                    console.error("No JSON was entered");
                }
                break;
            case("image"):
                if(this.validUrl()){
                    this.sendImageURLRequest();
                }
                else if(this.validFile()){
                    this.sendImageFileRequest();
                }
                else{
                    console.log("No image was provided.")
                }
                break;
            case("file"):
                if(this.validUrl()){
                    this.sendFileURLRequest();
                }
                else if(this.validFile()){
                    this.sendFileRequest();
                }
                else{
                    console.log("No file was provided.")
                }
                break;   
            default:
                break;             
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
                            imgData: this.state.imgData,
                            inputType: this.props.inputType,
                            content: this.state.content
                        }
                    }} /> 
                : ''}
            </div>
        )
    }

}

export default Action;