import React from 'react';
import { Redirect } from 'react-router-dom';

class Action extends React.Component{

    
    constructor(props) {    
        super(props);
        this.state = {
            go: false,
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

    getTextData = () => {
        let text = this.props.textRef.current.value;
        console.log(`Getting text input: ${text}`);
        this.setState({go: true, content: text});
    }

    getURLData = async () => {

        let inputUrl = this.props.urlRef.current.value;
        console.log(`Getting input from URL: ${inputUrl}`);

        let response = await fetch(inputUrl);
        let blob = await response.blob();      
    
        let reader = new FileReader();
        reader.onload = () => {
            this.setState({go: true, inputUrl: inputUrl, fileName: inputUrl, data: reader.result});
        }
        reader.readAsArrayBuffer(blob);

    }

    getFileData = () => {

        let url = this.props.uploadFiles();
        let file = this.props.files[0];
        console.log(`Getting input from file: ${file.name}`);

        let reader = new FileReader();
        reader.onload = () => {
            this.setState({go: true, inputUrl: url, fileName: file.name, data: reader.result})
        }
        reader.readAsArrayBuffer(file);

    }

    getData = async () => {

        if(this.props.inputType === "text" || this.props.inputType === "json"){
            if(this.validText()){
                this.getTextData();
            }
            else{
                console.error("No input was provided.");
            }
        }
        else{
            if(this.validUrl()){
                this.getURLData();
            }
            else if(this.validFile()){
                this.getFileData();
            }
            else{
                console.log("No input was provided.")
            }
        }
            
    }


    render(){
        return(
            <div id="btn-go" className='btn' onClick={this.getData}>
                GO!
                {
                this.state.go ?
                    <Redirect to={{
                        pathname: 'loading',
                        state: {
                            inputType: this.props.inputType,
                            data: this.state.data,
                            content: this.state.content,
                            inputUrl: this.state.inputUrl,
                            fileName: this.state.fileName
                        }
                    }} /> 
                : ''}
            </div>
        )
    }

}

export default Action;