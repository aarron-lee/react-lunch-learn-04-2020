import React, { memo } from 'react';
import { Heading, CodePane, indentNormalizer } from 'spectacle';
import CounterWithMemoAndRef from './CounterWithMemoAndRef';
import useForm from '../../hooks/useForm';
import WindowPortal from '../../components/WindowPortal';

const code = `
  const [count, setCount] = useState(0);
  const countRef = useRef();
  //...
  countRef.current = count;
  return (
    <MemoizedMinusButton countRef={countRef} decreaseCount={decreaseCount} />
  );


//------------------
const MemoizedMinusButton = React.memo(({ countRef, decreaseCount }) => (
  <button onClick={decreaseCount}>{countRef.current}-</button>
));
`


function CounterSlideWithMemoAndRef(props) {
  const { formData, updateField } = useForm({
    code
  });

  return (
    <>
      <Heading>Danger: Object props</Heading>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <CounterWithMemoAndRef />
        <div style={{ 'marginTop': '20px', width: "1000px" }}>
          <CodePane language="javascript" autoFillHeight>
            {indentNormalizer(formData.code)}
          </CodePane>
        </div>
      </div>
      <WindowPortal>
        Discuss solutions
        <ul>
          <li>2 solutions:</li>
          <li>Custom comparator</li>
          <li>OR pass shallow props</li>
        </ul>
        <textarea style={{ fontSize: "20px", height: "1000px", width: "550px" }} name="code" value={formData.code || ''} onChange={updateField}></textarea>
      </WindowPortal>
    </>
  );
}

export default memo(CounterSlideWithMemoAndRef);