import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

import user from '../../modules/user';

import withRedux from '../../hoc/withRedux';

const mapStateToProps = (state) => ({ ...state });

const actionToProps = {};

const Container = styled.div`
  width: 1920px;
  height: 705px;
  background-color: red;
`;

class Home extends React.Component {
  static propTypes = {
    dispatch: PT.func.isRequired
  };
  handleClick = () => {
    const userData = {
      firstName: 'Peter',
      lastName: 'Parker',
      age: '25'
    }
    this.props.dispatch(user.actions.updateValueUser(userData));
  };
  render() {
    return (
      <Container>
        <div>Home</div>
        <button onClick={this.handleClick}>Click</button>
      </Container>
    );
  }
}

export default withRedux(mapStateToProps, actionToProps)(Home);
