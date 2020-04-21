import React from 'react';
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
      }

    render(){

        var executionTimeStr = "", contentOutput = "", contentInput = "", mode = "";
        try{
            contentOutput = this.props.location.state.result;
            contentInput = this.props.location.state.imgUrl;
            mode = this.props.location.state.mode;
            var executionTime = this.props.location.state.executionTime;
            
            if(executionTime)
                executionTimeStr = `Executed in ${executionTime/1000} s`;
        }
        catch(error){
            console.error("Cannot read props.");
        }
    

        return(
            <div className="App">

                    <div className="row no-gutters">

                        <div className="col-lg-6">
                            <div id="results-output" className="results-panel">
                            <ImageOutput  mode={mode} content={contentOutput}/>
                            </div>
                        </div>

                        <div className="col-lg-6 order-lg-first">
                            <div id="results-input" className="results-panel">
                            <ImageInput mode={mode} content={contentInput}/>
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
