import React, { memo } from 'react';
import { Heading, UnorderedList, ListItem } from 'spectacle';

function ReactRenderIsOk(props) {
  return (
    <>
      <Heading>React render vs DOM render</Heading>
      <UnorderedList>
        <ListItem>Distinction between DOM render vs React Render</ListItem>
        <ListItem>React ALWAYS rerenders, regardless of prop changes!</ListItem>
        <ListItem>ReactDOM only selectively rerenders to the DOM</ListItem>
        <ListItem>React always rerendering is OK! It's considered to be pretty cheap</ListItem>
        <ListItem>However, there maybe times you want to control React render</ListItem>
      </UnorderedList>
    </>
  );
}

export default memo(ReactRenderIsOk);