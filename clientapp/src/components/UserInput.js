import React, { useState } from 'react';

const LongInputComponent = () => {
  const [inputText, setInputText] = useState('');

  // Handler to update input text
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div>
      <h2>Enter Long Input</h2>
      <textarea
        rows="10"  // Set a minimum height (can be changed)
        cols="50"  // Set a width (can be changed)
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type something here..."
        style={{
          width: '100%',  // Full-width
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          resize: 'both',  // Allow resizing
          minHeight: '200px',  // Minimum height to start with
        }}
      />
      <p>Character Count: {inputText.length}</p>
    </div>
  );
};

export default LongInputComponent;
