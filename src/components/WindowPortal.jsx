import React from 'react';
import { createPortal } from 'react-dom';

class Window extends React.Component {
  constructor(props) {
    super(props);
    this.state = { win: null, el: null };
  }

  componentDidMount() {
    let win = window.open('', '', 'width=600,height=400');
    win.document.title = 'A React portal window';
    let el = document.createElement('div');
    win.document.body.appendChild(el);
    this.setState({ win, el });
  }

  componentWillUnmount() {
    this.state.win.close();
  }

  render() {
    const { el } = this.state;
    if (!el) {
      return null;
    }
    return createPortal(this.props.children, el);
  }
}

export default Window;