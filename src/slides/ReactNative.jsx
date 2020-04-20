import React from 'react';
import { Heading, CodePane, indentNormalizer, Text, FlexBox } from 'spectacle';

const reactNative = `import React from 'react'
import { AppRegistry, Text } from 'react-native';

AppRegistry.register(
  'ProjectName',
  () => (
    <Text>Hello World</Text>
  )
);
`;

const reactNativeWeb = `import { AppRegistry, StyleSheet, Text, View } from 'react-native';

const App = () => (
  <View>
    <Text>Hello World</Text>
  </View>
);

AppRegistry.registerComponent('App', () => <App />);
AppRegistry.runApplication('App', { rootTag: document.getElementById('react-root') });`

const ink = `import {render, Color} from 'ink';
render(<Color green>3 tests pased</Color>)`

function WhatIsReactDOM(props) {
  return (
    <>
      <Heading>React Native, React-Native-Web</Heading>
      <FlexBox flex={{ flexDirection: "row" }}>
        <div style={{ width: "50%" }}>
          <Text>React Native</Text>
          <CodePane language="javascript" autoFillHeight >
            {indentNormalizer(reactNative)}
          </CodePane>
        </div>
        <div style={{ width: "50%" }}>
          <Text>React-Native-Web</Text>
          <CodePane language="javascript" autoFillHeight>
            {indentNormalizer(reactNativeWeb)}
          </CodePane>
        </div>
      </FlexBox>
    </>
  );
}

{/* <div>
  <Text>Ink</Text>
  <CodePane language="javascript" autoFillHeight>
    {indentNormalizer(ink)}
  </CodePane>
</div> */}

export default WhatIsReactDOM;