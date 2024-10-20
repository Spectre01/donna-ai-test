import React, { useState } from 'react';

const LongInputComponent = () => {
  const [inputText, setInputText] = useState('');

  // Handler to update input text
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div>
      <h2>How may I assist you?</h2>
      <textarea
        className="textarea-style"
        rows="10"  // Set a minimum height (can be changed)
        cols="50"  // Set a width (can be changed)
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type something here..."
      />
      <p>Character Count: {inputText.length}</p>
    </div>
  );
};

export default LongInputComponent;
