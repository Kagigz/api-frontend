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
      }

    render(){

        console.log(`URL: ${this.props.location.state.content}`)
        return(
            <div className="App">

                    <div className="row no-gutters">

                        <div className="col-lg-6">
                            <div id="results-output" className="results-panel">
                            <ImageOutput/>
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
