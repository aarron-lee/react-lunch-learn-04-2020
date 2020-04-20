import React, { useEffect, useRef } from 'react';
import { Heading, CodePane, indentNormalizer } from 'spectacle';
import useForm from '../../hooks/useForm';
import WindowPortal from '../../components/WindowPortal';

const code = `import { createRef, useRef } from "react";

// ref object
const objRef = { current: undefined }
// non-hook
const exampleRef = createRef();
// hook
const anotherExampleRef = useRef();
`;

const objRef = { current: undefined };

function Refs(props) {
  const { formData, updateField } = useForm({
    code
  });

  const divRef = useRef();
  const headingRef = useRef();

  useEffect(() => {
    console.log('object ref', objRef)
    console.log(headingRef)
    console.log(divRef)
  }, [])

  return (
    <>
      <Heading ref={headingRef}>React Refs</Heading>
      <div ref={objRef} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div ref={divRef} style={{ 'marginTop': '20px', width: "1000px" }}>
          <CodePane language="javascript" autoFillHeight>
            {indentNormalizer(formData.code)}
          </CodePane>
        </div>
      </div>
      <WindowPortal>      <textarea style={{ fontSize: "20px", height: "1000px", width: "550px" }} name="code" value={formData.code || ''} onChange={updateField}></textarea></WindowPortal>
    </>
  );
}

export default Refs;