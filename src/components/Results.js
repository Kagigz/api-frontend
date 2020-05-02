import React from 'react';
import '../css/results.scss';
import { Link } from 'react-router-dom';

import ImagePanel from './resultsPage/imagePanel'
import FilePanel from './resultsPage/filePanel'
import TextPanel from './resultsPage/textPanel'

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

        // Initializing variables
        var inputType = "", outputType = "";
        var input = "", output = "";
        var contentOutput = "", contentInputImg = "", contentInputText = "", inputExtension = "", inputFileName = "";
        var executionTimeStr = "";

        try{

            inputType = this.props.location.state.inputType;
            outputType = this.props.location.state.outputType;
            
            inputFileName = this.props.location.state.fileName;
            inputExtension = this.props.location.state.fileName?.split('.').pop();

            contentOutput = this.props.location.state.result;
            contentInputImg = this.props.location.state.inputUrl;
            contentInputText = this.props.location.state.input;

            var executionTime = this.props.location.state.executionTime;
            if(executionTime)
                executionTimeStr = `Executed in ${executionTime/1000} s`;

            // Showing different input panel based on input type
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
                    input = <FilePanel content={contentInputImg} fileName={inputFileName} extension={inputExtension}/>
                    break;
                default:
                    break; 
            }

            // Showing different ougput panel based on poutut type
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
                    output = <FilePanel content={contentOutput} fileName="" extension="generic"/>
                    break;
                default:
                    break;
            }

        }
        catch(error){
            console.error(`Error loading results page: ${error}`);
        }
    

        return(
            <div>

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
