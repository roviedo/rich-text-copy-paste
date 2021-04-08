import React, { useState } from 'react';
import './App.css';


function App() {
  const [textInput, handleChange] = useState('');
  const [richText, handleRichText] = useState('');
  const [showRichText, handleShowRichText] = useState(false);

  const handlePaste = (e) => {
    var clipboardData, pastedData;
    clipboardData = e.clipboardData || window.clipboardData;
    pastedData = clipboardData.getData('text/html');
    handleChange(e.target.value);
    handleRichText(pastedData);
    handleShowRichText(false);
  }
  const handleOnChange = (e) => {
    handleChange(e.target.value);
    handleShowRichText(false);
  }
  const handleSubmit = () => handleShowRichText(true);

  return (
    <div className="App">
      <div className="textarea-button-container">
        <textarea
          type="text"
          onPaste={handlePaste}
          onChange={handleOnChange}
        />
        <button type="submit" onClick={handleSubmit} >Submit</button>
        { showRichText ? <div dangerouslySetInnerHTML={{__html: richText}} className="rich-text" /> : null }
      </div>
    </div>
  );
}

export default App;
