import React from 'react';

function MinusButton({ increaseCount }) {
  console.log("plus button rendered")
  return (
    <button onClick={increaseCount} style={{ minHeight: '30px', fontSize: '30px' }}>+</button>
  );
}

export default MinusButton;