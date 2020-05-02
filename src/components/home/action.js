import React from 'react';
import { Redirect } from 'react-router-dom';

class Action extends React.Component{

    
    constructor(props) {    
        super(props);
        this.state = {
            go: false,
            mode: 'url',
            content: '',
            data: ''
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

        console.log("Send Text Request");

        let text = this.props.textRef.current.value;
        this.setState({go: true, mode: 'text', content: text});
    }

    sendJSONRequest = () => {

        console.log("Send JSON Request");

        let json = this.props.textRef.current.value;
        this.setState({go: true, mode: 'text', content: json});
    }

    sendImageURLRequest = async () => {

        console.log("Send Image URL Request");

        let imgUrl = this.props.urlRef.current.value;
        console.log(`Image URL: ${imgUrl}`);
        let response = await fetch(imgUrl);
        let blob = await response.blob();

        console.log(response);
        
    
        let reader = new FileReader();
        
        reader.onload = () => {
            this.setState({go: true, mode: 'url', imgUrl: imgUrl, data: reader.result});
        }
        
        reader.readAsArrayBuffer(blob);
    }

    sendImageFileRequest = () => {

        console.log("Send Image File Request");

        let url = this.props.uploadFiles();
        
        let file = this.props.files[0];

        let reader = new FileReader();
        reader.onload = () => {
            this.setState({go: true, mode: 'file', imgUrl: url, data: reader.result})
        }

        reader.readAsArrayBuffer(file);
    }

    sendFileURLRequest = async () => {

        console.log("Send File URL Request");

        let imgUrl = this.props.urlRef.current.value;
        console.log(`Image URL: ${imgUrl}`);
        let response = await fetch(imgUrl);
        let blob = await response.blob();

        console.log(response);
        
    
        let reader = new FileReader();
        
        reader.onload = () => {
            this.setState({go: true, data: reader.result});
        }
        
        reader.readAsArrayBuffer(blob);
    }

    sendFileRequest = async () => {   

        console.log("Send File Request");

        let url = this.props.uploadFiles();

        let file = this.props.files[0];
        let reader = new FileReader();
        reader.onload = () => {
            this.setState({go: true, imgUrl: url, data: reader.result, fileName: file.name})
        }

        reader.readAsArrayBuffer(file);
    }

    sendRequest = async () => {

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
                            data: this.state.data,
                            inputType: this.props.inputType,
                            content: this.state.content,
                            fileName: this.state.fileName
                        }
                    }} /> 
                : ''}
            </div>
        )
    }

}

export default Action;