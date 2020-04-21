import React from 'react';
import './loadingScreen.scss';
import { Redirect } from 'react-router-dom';

class LoadingScreen extends React.Component{

    
    constructor(props) {    
        super(props);
        this.state = {
            result: '',
            go: false,
            executionTime: 0
        }
      }



    callAPI = async (str, start) => {
        let apiUrl = process.env.REACT_APP_API_URL;
            fetch(apiUrl,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type':'image/jpeg'
                    },
                    body:str
                })
            .then(response => response.blob())
            .then(blob => URL.createObjectURL(blob))
            .then(url => this.setState({result: url, go:true, executionTime: new Date() - start}))

    }

    componentDidMount = () => {
        const start = new Date()
        try{
        this.callAPI(this.props.location.state.imgData, start);
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

        //console.log(`ImgData: ${this.propo}`)

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
                                mode: this.props.location.state.mode,
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
