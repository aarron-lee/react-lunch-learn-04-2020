import React, { memo } from 'react';
import { Heading, CodePane, indentNormalizer } from 'spectacle';
import CounterWithMemo from './CounterWithMemo';

const ink = `function Counter(props) {
  const [count, setCount] = useState(0);

  const increaseCount = useCallback(() => setCount(state => state + 1), []);
  const decreaseCount = useCallback(() => setCount(state => state - 1), []);
  return (
    <>
      {count}
      <div>
        <MinusButton decreaseCount={decreaseCount} />
        <PlusButton increaseCount={increaseCount} />
      </div>
    </>
  );
}`


function CounterSlideWithMemo(props) {
  return (
    <>
      <Heading>Counter component</Heading>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <CounterWithMemo />
        <div style={{ 'marginTop': '20px', width: "1000px" }}>
          <CodePane language="javascript" autoFillHeight>
            {indentNormalizer(ink)}
          </CodePane>
        </div>
      </div>
    </>
  );
}

export default memo(CounterSlideWithMemo);