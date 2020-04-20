import React from 'react';
import { Heading, CodePane, indentNormalizer } from 'spectacle';
import InkDemoSvg from './InkDemoSvg'

const ink = `import {render, Color} from 'ink';
import Counter from 'Src/Counter';

render(<Counter />)`

function ReactInk(props) {
  return (
    <>
      <Heading>Ink</Heading>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <InkDemoSvg />
        <div style={{ 'marginTop': '20px', width: "1000px" }}>
          <CodePane language="javascript" autoFillHeight>
            {indentNormalizer(ink)}
          </CodePane>
        </div>
      </div>
    </>
  );
}

export default ReactInk;