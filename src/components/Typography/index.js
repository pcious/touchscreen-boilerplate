import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';

const H1 = (props) => <h1>{props.children}</h1>;

H1.propTypes = {
  children: PropTypes.node
};
H1.defaultProps = {
  children: ''
};

export default {
  H1
};
