import React, { Component } from 'react';
import PT from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
// import { Route, Redirect } from 'react-router';
// import { connect } from 'react-redux';
import { Router } from 'react-router-dom';
import { AnimatedSwitch, AnimatedRoute } from 'react-router-transition';
import Modal from 'react-modal-es';

// ======================================================
// Hoc
// ======================================================
import { connectLanguage } from './hoc/multilanguage';
import withRedux from './hoc/withRedux';
import { connectModal, openModal } from './hoc/connectModal';
// ======================================================
// Util
// ======================================================
import { hashHistory, memoryHistory } from './utils';
// ======================================================
// Component
// ======================================================
import { AppHeader, AppFooter } from './components';
// ======================================================
// Action
// ======================================================
import { handleInitApplication } from './actions/applicationActions';
// ======================================================
// Analytic
// ======================================================
// import KeenIo from './analytics/keenIo';
// ======================================================
// Route
// ======================================================
import appRoutes from './routes';

const history =
  process.env.NODE_ENV === 'development' ? hashHistory : memoryHistory;

const transition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: 0
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: 1,
    backgroundColor: 'green'
  }
};

const Container = styled.div`
  width: 1920px;
  height: 1080px;
`;

const mapStyles = (styles) => ({
  opacity: styles.opacity,
  width: '1920px',
  height: '100%',
  overflow: 'hidden',
  position: 'relative'
});

const mapStateToProps = (state) => ({ ...state });

const actionToProps = {};

class App extends Component {
  static propTypes = {
    lang: PT.string,
    dispatch: PT.func.isRequired
  };
  static defaultProps = {
    lang: 'en'
  };
  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(handleInitApplication());
    openModal('myModal');
  };

  getAppMenus = () =>
    appRoutes.filter((route) => route.showInNavigation === true);

  renderRoutes = () => {
    const activeRoutes = appRoutes.filter((route) => route.active === true);
    return activeRoutes.map((route) => (
      <AnimatedRoute
        atEnter={transition.atEnter}
        atLeave={transition.atLeave}
        atActive={transition.atActive}
        mapStyles={mapStyles}
        exact={route.exact}
        path={route.to}
        component={route.component}
      />
    ));
  };

  render() {
    return (
      <ThemeProvider theme={{ lang: this.props.lang }}>
        <Router history={history}>
          <Container>
            <Modal name="myModal" title="Title Modal">
              Content
            </Modal>
            <AppHeader menus={this.getAppMenus()} />
            <AnimatedSwitch
              atEnter={transition.atEnter}
              atLeave={transition.atLeave}
              atActive={transition.atActive}
              mapStyles={mapStyles}
              className="switch-wrapper"
            >
              {this.renderRoutes()}
            </AnimatedSwitch>
            <AppFooter />
          </Container>
        </Router>
      </ThemeProvider>
    );
  }
}
export default connectModal(connectLanguage(withRedux(mapStateToProps, actionToProps)(App)));
