import React from 'react';
// import PT from 'prop-types';
import styled from 'styled-components';

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export default class extends React.Component {
  static propTypes = {};
  static defaultProps = {};
  state = {};
  render() {
    return <Footer>Footer</Footer>;
  }
}
