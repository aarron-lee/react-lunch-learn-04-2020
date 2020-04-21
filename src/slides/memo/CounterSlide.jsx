import React, { memo } from 'react';
import { Heading, CodePane, indentNormalizer } from 'spectacle';
import Counter from './Counter';
import WindowPortal from '../../components/WindowPortal';

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


function CounterSlide(props) {
  return (
    <>
      <Heading>Counter component</Heading>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Counter />
        <div style={{ 'marginTop': '20px', width: "1000px" }}>
          <CodePane language="javascript" autoFillHeight>
            {indentNormalizer(ink)}
          </CodePane>
        </div>
      </div>
      <WindowPortal>
        <ul>
          <li>Show browser render with paint flash</li>
          <li>show react render with console logs</li>
        </ul>
      </WindowPortal>
    </>
  );
}

export default memo(CounterSlide);