import React from 'react';
import { Box, FullScreen, Progress, Deck, FlexBox, Slide, Heading, UnorderedList, ListItem } from 'spectacle';
import ReactVsDom from './slides/react-reactdom/ReactVsDom';
import WhatIsReactDOM from './slides/react-reactdom/WhatIsReactDOM';
import ReactNative from './slides/react-reactdom/ReactNative';
import ReactInk from './slides/react-reactdom/ReactInk';
import Refs from './slides/refs/Refs';

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);

function App() {
  return (
    <div className="App">
      <Deck template={template}>
        <Slide>
          <FlexBox height="100%" flexDirection="column" verticalAlign="center">
            <Heading>React Lunch & Learn</Heading>
          </FlexBox>
        </Slide>
        <Slide>
          <Heading>Topics to Discuss</Heading>
          <UnorderedList>
            <ListItem>React vs ReactDOM vs ReactNative vs Ink</ListItem>
            <ListItem>React Ref</ListItem>
            <ListItem>React PureComponents (and React.memo)</ListItem>
            <ListItem>Render Props + children as render</ListItem>
            <ListItem>Context API</ListItem>
            <ListItem>Compound Components</ListItem>
          </UnorderedList>
        </Slide>
        <Slide>
          <ReactVsDom />
        </Slide>
        <Slide>
          <WhatIsReactDOM />
        </Slide>
        <Slide>
          <ReactNative />
        </Slide>
        <Slide>
          <ReactInk />
        </Slide>
        <Slide>
          <Refs />
        </Slide>
      </Deck>
    </div>
  );
}

export default App;
