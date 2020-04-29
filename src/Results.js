import React from 'react';
import './Results.scss';
import { Link } from 'react-router-dom';

import ImagePanel from './components/results/imagePanel'
import FilePanel from './components/results/filePanel'
import TextPanel from './components/results/textPanel'

class Results extends React.Component{

    getTypeName = (type) => {
        switch(type){
            case "text":
                return "Text"
            case "json":
                return "JSON"
            case "image":
                return "Image"
            case "file":
                return "File"
            default:
                return "Undefined"
        }
    }

    render(){

        var inputType = "", outputType = "";
        var executionTimeStr = "", contentOutput = "", contentInputImg = "", contentInputText = "", mode = "";
        try{
            contentOutput = this.props.location.state.result;
            contentInputImg = this.props.location.state.imgUrl;
            contentInputText = this.props.location.state.input;
            mode = this.props.location.state.mode;
            var executionTime = this.props.location.state.executionTime;

            inputType = this.props.location.state.inputType;
            outputType = this.props.location.state.outputType;
            
            if(executionTime)
                executionTimeStr = `Executed in ${executionTime/1000} s`;

            var input = ""
            switch(inputType){
                case "text":
                    input = <TextPanel content={contentInputText} type="input" format="text"/>
                    break;
                case "json":
                    input = <TextPanel content={contentInputText} type="input" format="json"/>
                    break;
                case "image":
                    input = <ImagePanel content={contentInputImg}/>
                    break;
                case "file":
                    input = <FilePanel mode={mode} content={contentInputImg}/>
                    break;
                default:
                    break;
            }

            var output = ""
            switch(outputType){
                case "text":
                    output = <TextPanel content={contentOutput} type="output" format="text"/>
                    break;
                case "json":
                    output = <TextPanel content={contentOutput} type="output" format="json"/>
                    break;
                case "image":
                    output = <ImagePanel content={contentOutput}/>
                    break;
                case "file":
                    output = <FilePanel mode={mode} content={contentOutput}/>
                    break;
                default:
                    break;
            }

        }
        catch(error){
            console.error("Cannot read props.");
        }
    

        return(
            <div className="App">

                    <div className="row no-gutters">

                        <div className="col-lg-6">
                            <div id="results-output" className="results-panel">
                                <div className="title">{this.getTypeName(outputType)} Output</div>
                                {output}
                            </div>
                        </div>

                        <div className="col-lg-6 order-lg-first">
                            <div id="results-input" className="results-panel">
                                <div className="title">{this.getTypeName(inputType)} Input</div>
                                {input}
                            </div>
                        </div>
                    </div>
            
            
                <div id="bottom">
                    <div id="btn-tryAgain" className="btn">
                        <Link to={{
                            pathname: '/'
                            }}>TRY AGAIN</Link>
                    </div>
                </div>
                
                <div id="executionTime">
                        {executionTimeStr}
                </div>
        
            </div>
        )
    }

}

export default Results;
