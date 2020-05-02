import React from 'react';

import Dropzone from './dropzone'
import FileZone from './filezone'

class FileUpload extends React.Component{


    render(){

        return(
            <div>
                <div className="upload">
                    <div className="content">

                      <FileZone fileName={this.props.fileName} clearFiles={this.props.clearFiles} fileUploaded={this.props.fileUploaded}/>
                      <Dropzone
                          onFilesAdded={this.props.onFilesAdded}
                          refId={this.props.refId}
                          fileUploaded={this.props.fileUploaded}
                      />
                        
                    </div>                  
                </div>
            </div>
        )
    }

}

export default FileUpload;