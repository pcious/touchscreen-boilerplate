import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

import AppLogo from '../AppLogo';
import Navigation from '../Navigation';

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export default class extends React.Component {
  static propTypes = {
    menus: PT.arrayOf(PT.shape({}))
  };
  static defaultProps = {
    menus: []
  };
  state = {};
  render() {
    const { menus } = this.props;
    return (
      <Header>
        <Navigation menus={menus} />
        <AppLogo />
      </Header>
    );
  }
}
