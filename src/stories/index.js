import React from 'react';
// import styled from 'styled-components';
// import _ from 'lodash';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import '../App.css';

import { Button, Typography } from '../components';

storiesOf('Button', module).add('Buttons', () => <Button />);

storiesOf('Typography', module).add('Typographies', () => (
  <Typography.H1>Hello</Typography.H1>
));
