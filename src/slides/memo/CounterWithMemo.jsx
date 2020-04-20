import React, { memo, useState, useCallback } from 'react';
import MinusButton from './MinusButton';
import PlusButton from './PlusButton';

const MemoMinusButton = memo(MinusButton);
const MemoPlusButton = memo(PlusButton);

function Counter(props) {
  const [count, setCount] = useState(0);

  const increaseCount = useCallback(() => setCount(state => state + 1), []);
  const decreaseCount = useCallback(() => setCount(state => state - 1), []);
  return (
    <>
      <div style={{ fontSize: '50px' }}>
        {count}
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <MemoMinusButton decreaseCount={decreaseCount} />
        <MemoPlusButton increaseCount={increaseCount} />
      </div>
    </>
  );
}

export default Counter;