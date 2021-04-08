import React, { useState } from 'react';
import './App.css';


function App() {
  const [textInput, handleChange] = useState('');
  // const handlePaste = (e) => {
  //   var clipboardData, pastedData;
  //   console.log('e', e);

  //   // Stop data actually being pasted into div
  //   e.stopPropagation();
  //   e.preventDefault();

  //   // Get pasted data via clipboard API
  //   clipboardData = e.clipboardData || window.clipboardData;
  //   // pastedData = clipboardData.getData('Text');
    
  //   // Do whatever with pasteddata
  //   // alert(pastedData);
  //   console.log('im not here');
  //   return handleChange('test');
  // }
  const handlePaste = (e) => {
    var clipboardData, pastedData;
    clipboardData = e.clipboardData || window.clipboardData;
    console.log('clipboardData', clipboardData);
    pastedData = clipboardData.getData('text/html');
    console.log('pastedData', pastedData);
    return handleChange(e.target.value);
  }
  const handleOnChange = (e) => handleChange(e.target.value);

  return (
    <div className="App">
      <div>
        <input
          type="text"
          onPaste={handlePaste}
          onChange={handleOnChange} />
      </div>
    </div>
  );
}

export default App;
