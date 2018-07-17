import React from 'react';
import PT from 'prop-types';
import _ from 'lodash';

export default (WrapperComponent) => {
  class ConnectLanguage extends React.Component {
    static contextTypes = {
      lang: PT.string,
      handleChangeLanguage: PT.func
    };

    // getContentLanguage = obj => _.get(obj, this.context.lang);
    getContentLanguage = (obj) => {
      const data = _.get(obj, this.context.lang);
      if (_.isEmpty(data) || data === '-') {
        const dataEn = _.get(obj, 'en');
        return _.isEmpty(dataEn) ? '-' : dataEn;
      }
      return data;
    };

    render() {
      return (
        <WrapperComponent
          {...this.props}
          {...this.context}
          getContentLanguage={this.getContentLanguage}
        />
      );
    }
  }
  return ConnectLanguage;
};
