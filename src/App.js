import React from 'react';
import { Box, FullScreen, Progress, Deck, FlexBox, Slide, Heading, UnorderedList, OrderedList, CodePane, ListItem } from 'spectacle';
import ReactVsDom from './slides/ReactVsDom';

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
          <ReactVsDom/>
        </Slide>
      </Deck>
    </div>
  );
}

export default App;
