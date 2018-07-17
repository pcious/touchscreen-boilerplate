import React from 'react';
import _ from 'lodash';
import PT from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Holder = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const HolderNavbarButton = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100px;
  padding: 30px 40px 34px 40px;
  opacity: 0.6;
  transition: 0.3s all ease-in-out;
  text-decoration: none;
  &.active {
    opacity: 1;
  }
`;

const NavbarHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

export default class extends React.Component {
  static propTypes = {
    menus: PT.arrayOf(PT.object)
  };
  static defaultProps = {
    menus: [
      {
        label: 'Home',
        to: '/home',
        exact: true
      },
      {
        label: 'Page1',
        to: '/page1',
        exact: true
      },
      {
        label: 'Page',
        to: '/page2',
        exact: true
      }
    ]
  };
  render() {
    const { menus } = this.props;
    return (
      <Holder>
        <NavbarHolder>
          {_.map(menus, (menu) => (
            <HolderNavbarButton
              key={menu.to}
              exact={menu.exact}
              to={menu.to}
              padding="32 15px"
              className={menu.active ? 'active' : ''}
            >
              {menu.label}
            </HolderNavbarButton>
          ))}
        </NavbarHolder>
      </Holder>
    );
  }
}
