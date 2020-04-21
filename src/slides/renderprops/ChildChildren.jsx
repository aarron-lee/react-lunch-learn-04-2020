import React from 'react';
import { Heading, CodePane, indentNormalizer } from 'spectacle';
import useForm from '../../hooks/useForm';
import WindowPortal from '../../components/WindowPortal';

function Button({ children }) {
  console.log(children)
  return <button>{children}</button>;
}

const ButtonWithTwoChildren = (<Button>
  <div>Hi</div>
  <div>there</div>
</Button>)

const ButtonWithChild = (<Button>
  Hi
</Button>)

const code = `
function Button({ children }) {
  console.log(children)
  return <button>{children}</button>;
}
const ButtonWithChild = (<Button>
  Hi
</Button>)

const ButtonWithTwoChildren = (<Button>
  <div>Hi</div>
  <div>there</div>
</Button>)
`;

function ChildrenRenderProp(props) {
  const { formData, updateField } = useForm({
    code
  });

  return (
    <>
      <Heading>Child vs Children</Heading>
      <CodePane language="javascript" autoFillHeight>
        {indentNormalizer(formData.code)}
      </CodePane>
      <WindowPortal>
        Presenter notes:
        <ul>
          <li>Discuss arr vs element children</li>
          <li>In IoC, custom-written portions of a computer program receive the flow of control from a generic framework</li>
          <li>e.g. event handlers, browser bubbles events, you can catch and do stuff with the events</li>
        </ul>
        <textarea style={{ fontSize: "20px", height: "1000px", width: "550px" }} name="code" value={formData.code || ''} onChange={updateField}></textarea>
        {ButtonWithChild}
        {ButtonWithTwoChildren}
      </WindowPortal>
    </>
  );
}

export default ChildrenRenderProp;