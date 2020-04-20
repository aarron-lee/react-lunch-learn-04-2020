import React, { useEffect, useRef } from 'react';
import { Heading, CodePane, indentNormalizer } from 'spectacle';

const code = `import { createRef, useRef } from "react";
// non-hook
const exampleRef = createRef();
// hook
const anotherExampleRef = useRef();
// ref object
const objRef = { current: undefined }
`;

const objRef = { current: undefined };

function Refs(props) {

  const divRef = useRef();
  const headingRef = useRef();

  useEffect(() => {
    console.log(headingRef)
    console.log(divRef)
    console.log('object ref', objRef)
  }, [])

  return (
    <>
      <Heading ref={headingRef}>React Refs</Heading>
      <div ref={objRef} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div ref={divRef} style={{ 'marginTop': '20px', width: "1000px" }}>
          <CodePane language="javascript" autoFillHeight>
            {indentNormalizer(code)}
          </CodePane>
        </div>
      </div>
    </>
  );
}

export default Refs;