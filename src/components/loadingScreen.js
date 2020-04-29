import React from 'react';
import './loadingScreen.scss';
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
        .then(result => {
            console.log(result);
            this.setState({result: result, go:true, executionTime: new Date() - start})
        })
        .catch(error => console.log(error))

    }

    callApiImageResult = async (apiURL, data, contentType, start) => {
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
            .catch(error => console.log(error))

    }

    callApiJsonResult = async (apiURL, data, contentType, start) => {

            console.log("Call API JSON");
            fetch(apiURL,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': contentType
                    },
                    body: data
                })
            .then(response => response.json())
            .then(result => {
                console.log(result);
                this.setState({result: result, go:true, executionTime: new Date() - start})
            })
            .catch(error => console.log(error))
    }

    componentDidMount = () => {
        let apiURL = process.env.REACT_APP_API_URL;
        let outputType = process.env.REACT_APP_OUTPUT_TYPE;
        if (outputType !== "image" && outputType !== "json" && outputType !== "text" && outputType !== "file")
            outputType = "text"
        this.setState({outputType})

        const start = new Date()
        let data;
        let contentType;
        switch(this.props.location.state.inputType){
            case("text"):
                data = this.props.location.state.content;
                contentType = "text/html";
                break;
            case("json"):
                data = this.props.location.state.content;
                contentType = "application/json";
                break;
            case("image"):
                data = this.props.location.state.imgData;
                contentType = "image/jpeg";
                break;
            case("file"):
                data = this.props.location.state.imgData;
                contentType = "application/octet-stream";
                break;
            default:
                break;
        }

        try{
            switch(outputType){
                case("text"):
                    this.callApiTextResult(apiURL, data, contentType, start);
                    break;
                case("json"):
                    this.callApiJsonResult(apiURL, data, contentType, start);
                    break;
                case("image"):
                    this.callApiImageResult(apiURL, data, contentType, start);
                    break;
                default:
                    break;
            }         
        }
        catch(error){
            console.error("Cannot call API.");
        }
    }

    str2ab = (str) => {
        var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
        var bufView = new Uint16Array(buf);
        for (var i = 0, strLen = str.length; i < strLen; i++) {
          bufView[i] = str.charCodeAt(i);
        }
        return buf;
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
                                imgUrl: this.props.location.state.imgUrl,
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
