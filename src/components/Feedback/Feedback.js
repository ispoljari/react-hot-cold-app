import React from 'react';
import { Typography } from '@smooth-ui/core-sc';
import * as Styled from './style';

const Feedback = ({feedback}) =>  (
  <Styled.Feedback>
    <Typography variant="h2" fontSize={22} textAlign="center" my={0} mx="auto"> {feedback}
    </Typography>
  </Styled.Feedback>
);

export default Feedback;