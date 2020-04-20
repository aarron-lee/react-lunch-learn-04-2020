import React from 'react';

function MinusButton({ increaseCount }) {
  console.log("plus button rendered by React")
  return (
    <button onClick={increaseCount} style={{ minHeight: '30px', fontSize: '30px' }}>+</button>
  );
}

export default MinusButton;