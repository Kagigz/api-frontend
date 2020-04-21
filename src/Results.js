import React from 'react';
import './index.scss'
import './Results.scss';
import { Link } from 'react-router-dom';

import JSONInput from './components/results/input/jsonInput'
import TextInput from './components/results/input/textInput'
import ImageInput from './components/results/input/imageInput'
import FileInput from './components/results/input/fileInput'
import JSONOutput from './components/results/output/jsonOutput'
import TextOutput from './components/results/output/textOutput'
import ImageOutput from './components/results/output/imageOutput'
import FileOutput from './components/results/output/fileOutput'

class Results extends React.Component{

    
    constructor(props) {    
        super(props);
        this.state = {
            result: ''
        }
      }



    callAPI = async (str) => {
        let apiUrl = process.env.REACT_APP_API_URL;
            fetch(apiUrl,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type':'image/jpeg'
                    },
                    body:str
                })
            // .then(response => response.body?.getReader())
            // .then(reader => reader?.read())
            // .then(content => new Blob([content], {type:'image/jpg'}))
            //.then(content => console.log(`Content: ${content}`))
            //.then(response => response.blob())
            .then(response => response.text())
            .then(result => console.log(result))
            // .then(blob => URL.createObjectURL(blob))
            // .then(url => this.setState({result: url}))
            //.then(response => console.log(response))
            // .then(stream => stream.getReader())
            // .then(reader => reader.read())
            // .then(done, value => console.log(value))
            // .then(response => {
            //     //const reader = response.body.getReader();
            //     let reader = response.body;
            //     reader.onload = () => {
            //         this.setState({result: reader.result})
            //     }
            //     reader.readAsArrayBuffer();
            //     // reader.read().then(value => {
            //     //     let blob = new Blob([new Uint8Array(value)]);
            //     //     let url = URL.createObjectURL(blob);
            //     //     console.log(value);
            //     //     this.setState({result: url})
            //     // });
            //     });
            //})
            // .then(str => this.str2ab(str))
            // .then(ab => new Blob([ab]))
            // .then(blob => URL.createObjectURL(blob))
           // .then(url => this.setState({result: url}))
                //let resultUrl = URL.createObjectURL(response.body);
            //     let reader = response.body.getReader();

            //     this.setState({result: resultUrl})
            // })
            // .then(response => response.blob())
            // .then(data => {
            //     let resultUrl = URL.createObjectURL(data);
            //     this.setState({result: resultUrl})
            // })
    
    }

    componentDidMount = () => {
        this.callAPI(this.props.location.state.binaryStr);
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

        //console.log(`Result: ${this.props.location.state.binaryStr}`);
        console.log(`Result: ${this.state.result}`);

        return(
            <div className="App">

                    <div className="row no-gutters">

                        <div className="col-lg-6">
                            <div id="results-output" className="results-panel">
                            <ImageOutput  mode={this.props.location.state.mode} content={this.state.result}/>
                            </div>
                        </div>

                        <div className="col-lg-6 order-lg-first">
                            <div id="results-input" className="results-panel">
                            <ImageInput mode={this.props.location.state.mode} content={this.props.location.state.content}/>
                            </div>
                        </div>
                    </div>
            
            
                <div id="bottom">
                    <div id="btn-tryAgain">
                        <Link to={{
                            pathname: '/'
                            }}>TRY AGAIN</Link>
                    </div>
                    <div id="executionTime">
                        Executed in 3.2s
                    </div>
                </div>

        
            </div>
        )
    }

}

export default Results;
