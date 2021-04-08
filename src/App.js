import React, { useState } from 'react';
import './App.css';


function App() {
  const [textInput, handleChange] = useState('');
  const [richText, handleRichText] = useState('');
  const [showRichText, handleShowRichText] = useState(false);

  const handlePaste = (e) => {
    let clipboardData, pastedData;
    let dataType = 'text/plain';
    clipboardData = e.clipboardData || window.clipboardData;
    if (clipboardData.types && clipboardData.types.includes('text/html')) {
      dataType = 'text/html';
    }
    pastedData = clipboardData.getData(dataType);
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
        <h1>Handle Rich Text copy/pasting</h1>
        <textarea
          type="text"
          onPaste={handlePaste}
          onChange={handleOnChange}
        />
        <button type="submit" onClick={handleSubmit} >Submit</button>
        { showRichText ?
          (richText ? <div dangerouslySetInnerHTML={{__html: richText}} className="rich-text" /> : textInput)
        : null }
      </div>
    </div>
  );
}

export default App;
