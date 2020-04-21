import React from 'react';
import './App.scss';

import Description from './components/home/description'
import InputZone from './components/home/inputZone'



function App() {

  return (
    <div className="App">

      <div id="description-wrapper">
        <div className='row no-gutters'>
          <div id="description" className='col-md-8 col-lg-6 offset-lg-3 offset-md-2'>
            <Description/>
          </div>
        </div>
        
      </div>

      <InputZone/>

    </div>
  
  );
}

export default App;
