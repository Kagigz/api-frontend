import React from 'react';
import '../css/loadingScreen.scss';
import { Redirect } from 'react-router-dom';

class LoadingScreen extends React.Component{

    
    constructor(props) {    
        super(props);
        this.state = {
            result: '',
            go: false,
            executionTime: 0,
            outputType: ""
        }
      }


    callApiTextResult = async (apiURL, data, contentType, start) => {
        fetch(apiURL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': contentType
                },
                body: data
            })
        .then(response => response.text())
        .then(result => this.setState({result: result, go:true, executionTime: new Date() - start}))
        .catch(error => console.log(`Error in callApiTextResult: ${error}`))
    }

    callApiJsonResult = async (apiURL, data, contentType, start) => {
        fetch(apiURL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': contentType
                },
                body: data
            })
        .then(response => response.json())
        .then(result => this.setState({result: result, go:true, executionTime: new Date() - start}))
        .catch(error => console.log(`Error in callApiJsonResult: ${error}`))
    }


    callApiFileResult = async (apiURL, data, contentType, start) => {
        fetch(apiURL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': contentType
                },
                body: data
            })
        .then(response => response.blob())
        .then(blob => URL.createObjectURL(blob))
        .then(url => this.setState({result: url, go:true, executionTime: new Date() - start}))
        .catch(error => console.log(`Error in callApiFileResult: ${error}`))
    }

    componentDidMount = () => {

        // Getting API URL from environment variable
        let apiURL = process.env.REACT_APP_API_URL;
        console.log(`Sending request to ${apiURL}`);

        // Getting output type from environment variable
        let outputType = process.env.REACT_APP_OUTPUT_TYPE;
        if (outputType !== "image" && outputType !== "json" && outputType !== "file" && outputType !== "audio" && outputType !== "video")
            outputType = "text"
        this.setState({outputType});
        // Getting input type from props
        let inputType = this.props.location.state.inputType;
        console.log(`Input: ${inputType} / Output: ${outputType}`);

        // Initializing time variable to calculate execution time later
        const start = new Date()
        let data;
        let contentType;

        // Setting data and content type to send to the API depending on input type
        switch(inputType){
            case("text"):
                data = this.props.location.state.content;
                contentType = "text/html";
                break;
            case("json"):
                data = this.props.location.state.content;
                contentType = "application/json";
                break;
            case("image"):
                data = this.props.location.state.data;
                contentType = "image/jpeg";
                break;
            case("file"):
                data = this.props.location.state.data;
                contentType = "application/octet-stream";
                break;
            default:
                break;
        }

        // Calling a different method depending on output type
        try{
            switch(outputType){
                case("text"):
                    this.callApiTextResult(apiURL, data, contentType, start);
                    break;
                case("json"):
                    this.callApiJsonResult(apiURL, data, contentType, start);
                    break;
                case("image"):
                    this.callApiFileResult(apiURL, data, contentType, start);
                    break;
                case("file"):
                    this.callApiFileResult(apiURL, data, contentType, start);
                    break;
                default:
                    break;
            }         
        }
        catch(error){
            console.error(`Cannot send request to API: ${error}`);
        }

    }

    render(){

        return(  
            <div id="loadingScreen">
                
                <div id="loadingContent">
                    <span className="title">Loading...</span>
                    <div className="sk-chase">
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    </div>
                </div>

                    {
                    this.state.go ?
                        <Redirect to={{
                            pathname: 'results',
                            state: {
                                inputType: this.props.location.state.inputType,
                                outputType: this.state.outputType,
                                input: this.props.location.state.content,
                                inputUrl: this.props.location.state.inputUrl,
                                fileName: this.props.location.state.fileName,
                                result: this.state.result,
                                executionTime: this.state.executionTime
                            }
                        }} /> 
                    : ''}

            </div>
        )
    }

}

export default LoadingScreen;
