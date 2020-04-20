import React, { useEffect } from 'react';
import { Heading, CodePane, indentNormalizer, Text, ListItem, UnorderedList } from 'spectacle';
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
    <UnorderedList>
      <ListItem>Syntactic sugar for "React.createElement"</ListItem>
    </UnorderedList>
    <CodePane language="javascript" autoFillHeight >
      {indentNormalizer(formData.code)}
    </CodePane>
    <WindowPortal>
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