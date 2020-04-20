import React, { memo, useState, useCallback, useRef } from 'react';
import PlusButton from './PlusButton';


const MinusButtonWithRef = memo(({ countRef, decreaseCount }) => (<>
  <button style={{ minHeight: '30px', fontSize: '30px' }} onClick={decreaseCount}>{countRef.current}-</button>
</>));


const MemoPlusButton = memo(PlusButton);

function CounterWithMemoAndRef() {
  const [count, setCount] = useState(0);

  const increaseCount = useCallback(() => setCount(state => state + 1), []);
  const decreaseCount = useCallback(() => setCount(state => state - 1), []);

  const countRef = useRef();
  countRef.current = count;

  return (
    <>
      <div style={{ fontSize: '50px' }}>
        {count}
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <MinusButtonWithRef countRef={countRef} decreaseCount={decreaseCount} />
        <MemoPlusButton increaseCount={increaseCount} />
      </div>
    </>
  );
}

export default CounterWithMemoAndRef;