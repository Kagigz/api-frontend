import React from 'react';
import '../css/app.scss';

import Description from './homePage/description'
import InputZone from './homePage/input/inputZone'



function App() {

  var inputType = process.env.REACT_APP_INPUT_TYPE;
  if (inputType !== "image" && inputType !== "json" && inputType !== "text" && inputType !== "file")
    inputType = "text"

  return (
    <div className="App">

      <div id="description-wrapper">
        <div className='row no-gutters'>
          <div id="description" className='accentBox col-md-8 col-lg-6 offset-lg-3 offset-md-2'>
            <Description/>
          </div>
        </div>
      </div>

      <InputZone inputType={inputType}/>

    </div>
  
  );
}

export default App;
