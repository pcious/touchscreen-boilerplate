import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const AppLogo = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
`;

const logo =
  'https://images.dog.ceo/breeds/mountain-bernese/n02107683_4695.jpg';

export default () => <AppLogo src={logo} alt="" />;
