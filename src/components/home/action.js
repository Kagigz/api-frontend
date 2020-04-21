import React from 'react';
import { Redirect } from 'react-router-dom';

class Action extends React.Component{

    
    constructor(props) {    
        super(props);
        this.state = {
            go: false,
            mode: 'url',
            content: '',
            binaryStr: ''
        }
    }


    validUrl = () => {
        try{
        if(this.props.urlRef.current.value != '')
            return true;
        }
        catch(e){
            console.error("URL input is not defined.")
        }
        return false;
    }

    validText = () => {
        try{
            if(this.props.textRef.current.value != '')
                return true;
        }
        catch(e){
            console.error("Text input is not defined.")
        }
        return false;
    }

    validFile = () => {
        try{
        if(this.props.fileRef.current.value != '')
            return true;
        }
        catch(e){
            console.error("File input is not defined.")
        }
        return false;
    }

    sendRequest = () => {
        console.log("Send Request");
        if(this.validUrl()){
            console.log("Valid URL");
            this.setState({go: true, mode: 'url', content: 'https://images.sudouest.fr/2020/01/21/5e27092366a4bd6733ae5f03/widescreen/1000x500/plus-de-14700-bergers.jpg?v1'});
        }
        else if(this.validText()){
            console.log("Valid Text");
            this.setState({go: true, mode: 'text', content: 'text'});
        }
        else if(this.validFile()){
            let url = this.props.uploadFiles()[0];

            let file = this.props.files[0];

            let reader = new FileReader();
            reader.onload = () => {
                this.setState({binaryStr: reader.result, go: true, mode: 'file', content: url})
            }
           let file_str = reader.readAsArrayBuffer(file);

        //    this.setState({go: true, mode: 'file', content: url});
        }
        else{
            console.log("Please provide a valid input.")
        }
    
    }


    render(){

        console.log(this.state.content);

        return(
            <div className='btn-go' onClick={this.sendRequest}>
                GO!
                {
                this.state.go ?
                    <Redirect to={{
                        pathname: 'results',
                        state: {
                            mode: this.state.mode,
                            content: this.state.content,
                            binaryStr: this.state.binaryStr
                        }
                    }} /> 
                : ''}
            </div>
        )
    }

}

export default Action;