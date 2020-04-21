import React from 'react';
import { Heading, CodePane, indentNormalizer } from 'spectacle';
import useForm from '../../hooks/useForm';
import WindowPortal from '../../components/WindowPortal';

const code = `
const buttonStyles = css\`
  font-size: 30px;
\`;

function Button(props) {
  if(props.render && typeof props.render === 'function') {
    return props.render({ buttonStyles })
  }

  return <button className={buttonStyles} {...props}/>;
}

// usage
<Button render={({buttonStyles}) => (<a href="nytimes.com" className={buttonStyles})}/>
`;

function RenderProps(props) {
  const { formData, updateField } = useForm({
    code
  });

  return (
    <>
      <Heading>Render Props</Heading>
      <CodePane language="javascript" autoFillHeight>
        {indentNormalizer(formData.code)}
      </CodePane>
      <WindowPortal>
        Presenter notes:
        <ul>
          <li>In IoC, custom-written portions of a computer program receive the flow of control from a generic framework</li>
          <li>e.g. event handlers, browser bubbles events, you can catch and do stuff with the events</li>
        </ul>
        <textarea style={{ fontSize: "20px", height: "1000px", width: "550px" }} name="code" value={formData.code || ''} onChange={updateField}></textarea></WindowPortal>
    </>
  );
}

export default RenderProps;