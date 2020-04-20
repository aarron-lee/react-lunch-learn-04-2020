import React from 'react';
import { Box, FullScreen, Progress, Deck, FlexBox, Slide, Heading, UnorderedList, ListItem } from 'spectacle';
import ReactVsDom from './slides/react-reactdom/ReactVsDom';
import WhatIsReactDOM from './slides/react-reactdom/WhatIsReactDOM';
import ReactNative from './slides/react-reactdom/ReactNative';
import ReactInk from './slides/react-reactdom/ReactInk';
import Refs from './slides/refs/Refs';
import CounterSlide from './slides/memo/CounterSlide';
import CounterSlideWithMemo from './slides/memo/CounterSlideWithMemo';
import CounterSlideWithMemoAndRef from './slides/memo/CounterSlideWithMemoAndRef';
import ReactRenderIsOk from './slides/memo/ReactRenderIsOk';

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
        <Slide>
          <FlexBox height="100%" flexDirection="column" verticalAlign="center">
            <Heading>React.memo (and PureComponents)</Heading>
          </FlexBox>
        </Slide>
        <Slide>
          <CounterSlide />
        </Slide>
        <Slide>
          <ReactRenderIsOk />
        </Slide>
        <Slide>
          <CounterSlideWithMemo />
        </Slide>
        <Slide>
          <CounterSlideWithMemoAndRef />
        </Slide>
        <Slide>
          <Heading>React.memo + PureComponent summary</Heading>
          <UnorderedList>
            <ListItem>even if props don't change, components still rerender if parent rerenders (can optimize with memo or PureComponents)</ListItem>
            <ListItem>React renders are considered cheap, only use React.memo for performance optimization</ListItem>
            <ListItem>Avoid Object props when possible, especially with React.memo</ListItem>
          </UnorderedList>
        </Slide>
      </Deck>
    </div>
  );
}

export default App;
