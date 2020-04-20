import React from 'react';

function MinusButton({ decreaseCount }) {
  console.log("minus button rendered by React")
  return (
    <button onClick={decreaseCount} style={{ minHeight: '30px', fontSize: '30px' }}>-</button>
  );
}

export default MinusButton;