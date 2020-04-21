import React, { useEffect } from 'react';
import { Heading, CodePane, indentNormalizer, Text } from 'spectacle';
import useForm from '../../hooks/useForm';
import WindowPortal from '../../components/WindowPortal';

// const initialText = `const app = <App />;
// ReactDOM.render(app);
// `

const initialText = `function Button(props) {
  return <button {...props}/>;
}
<div style={{ fontSize: "20px" }}>
  <Button>Hi</Button>
</div>
`

function ReactVsDom(props) {
  const { formData, updateField } = useForm({
    code: initialText
  });

  const content = <>
    <Heading>What is React?</Heading>
    <Text>What is JSX?</Text>
    <CodePane language="javascript" autoFillHeight >
      {indentNormalizer(formData.code)}
    </CodePane>
    <WindowPortal>
      presentation notes
      <ul>
        <li>talk about react.createElement</li>
        <li>console.log jsx</li>
        <li>show jsx in console</li>
        <li>it's just plain js</li>
      </ul>
      <textarea style={{ fontSize: "20px", height: "1000px", width: "550px" }} name="code" value={formData.code || ''} onChange={updateField}></textarea>
    </WindowPortal>
  </>

  useEffect(() => {
    console.log(content);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return content;
}

export default ReactVsDom;