import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export default (mapStateToProps, actions = {}) => (Component) => {
  const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(actions, dispatch),
    dispatch
  });
  class WithRedux extends React.PureComponent {
    render() {
      return <Component {...this.props} />;
    }
  }
  return connect(mapStateToProps, mapDispatchToProps)(WithRedux);
};
