import './App.css';
import React from 'react';

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh', // Make the container fill the viewport height
};

const buttonStyle = {
  backgroundColor: 'red',
  borderRadius: '10px',
  padding: '10px 20px', // Adding some padding to the buttons for a better appearance
  margin: '5px', // Adding margin between buttons
};

function App() {
  function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
  }

  const colorButtons = [
    { label: 'Red', color: 'red' },
    { label: 'Purple', color: 'purple' },
    { label: 'Pink', color: 'pink' },
    { label: 'Black', color: 'black', textColor: 'white' },
    { label: 'Blue', color: 'blue' },
    { label: 'Green', color: 'green' },
    { label: 'Yellow', color: 'yellow' },
    { label: 'Orange', color: 'orange' },
    { label: 'Brown', color: 'brown' },
  ];

  return (
    <div style={containerStyle}>
      {colorButtons.map((button, index) => (
        <button
          key={index}
          onClick={() => changeBackgroundColor(button.color)}
          style={{
            ...buttonStyle,
            backgroundColor: button.color,
            color: button.textColor || 'black',
          }}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}

export default App;
