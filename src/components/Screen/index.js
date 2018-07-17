import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

const Screen = styled.div`
  width: 1920px;
  position: relative;
`;

export default class extends React.Component {
  static propTypes = {
    children: PT.node.isRequired
  };
  render() {
    const { children } = this.props;
    return <Screen>{children}</Screen>;
  }
}
