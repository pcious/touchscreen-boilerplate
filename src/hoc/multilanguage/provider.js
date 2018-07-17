import React from 'react';
import PT from 'prop-types';
import _ from 'lodash';

export default class LanguageProvider extends React.Component {
  static childContextTypes = {
    lang: PT.string,
    handleChangeLanguage: PT.func
  };
  static propTypes = {
    children: PT.node.isRequired,
    defaultLanguage: PT.string.isRequired,
    allLanguages: PT.arrayOf(PT.string).isRequired
  };
  state = {
    lang: this.props.defaultLanguage
  };
  getChildContext() {
    return {
      lang: this.state.lang,
      handleChangeLanguage: this.handleChangeLanguage
    };
  }
  handleChangeLanguage = (lang) => {
    if (_.some(this.props.allLanguages, (data) => data === lang)) {
      this.setState({
        lang
      });
    }
  };
  render() {
    return React.Children.only(this.props.children);
  }
}
