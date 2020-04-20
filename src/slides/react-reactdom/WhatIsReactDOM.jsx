import React from 'react';
import { Heading, CodePane, indentNormalizer, Text, ListItem, UnorderedList } from 'spectacle';
import useForm from '../../hooks/useForm';
import WindowPortal from '../../components/WindowPortal';

const initialText = `
ReactDOM.render(<App/>, document.getElementById('root-div'))
`

function WhatIsReactDOM(props) {
  return (
    <>
      <Heading>What is ReactDOM?</Heading>
      <Text>Hint</Text>
      <CodePane language="javascript" autoFillHeight >
        {indentNormalizer(initialText)}
      </CodePane>
    </>
  );
}

export default WhatIsReactDOM;