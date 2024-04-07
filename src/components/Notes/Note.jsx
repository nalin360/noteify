// src/Note.js
import React from 'react';

const Note = ({ id, text, index, setItems }) => {
 return (
    <div
      style={{
        margin: '10px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
      }}
    >
      {text}
    </div>
 );
};

export default Note;
