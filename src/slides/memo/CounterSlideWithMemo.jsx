import React, { memo } from 'react';
import { Heading, CodePane, indentNormalizer } from 'spectacle';
import CounterWithMemo from './CounterWithMemo';
import useForm from '../../hooks/useForm';
import WindowPortal from '../../components/WindowPortal';

const code = `const MemoizedMinusButton = React.memo(MinusButton);
const MemoizedPlusButton = React.memo(PlusButton);`


function CounterSlideWithMemo(props) {
  const { formData, updateField } = useForm({
    code
  });

  return (
    <>
      <Heading>Solution: Use React.memo!</Heading>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <CounterWithMemo />
        <div style={{ 'marginTop': '20px', width: "1000px" }}>
          <CodePane language="javascript" autoFillHeight>
            {indentNormalizer(formData.code)}
          </CodePane>
        </div>
      </div>
      <WindowPortal>
        Presenter notes:
        <ul>
          <li>Walk through shallow compare that React.memo does</li>
          <li>Discuss that there are pitfalls to this</li>
        </ul>
        <textarea style={{ fontSize: "20px", height: "1000px", width: "550px" }} name="code" value={formData.code || ''} onChange={updateField}></textarea>
      </WindowPortal>
    </>
  );
}

export default memo(CounterSlideWithMemo);