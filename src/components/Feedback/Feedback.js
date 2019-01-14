import React from 'react';
import { Typography } from '@smooth-ui/core-sc';
import styled from 'styled-components';

const StyledFeedback = styled.div`
  border-radius: 5px;
  padding: 4px;
  background-color: #ea4335;
  display: flex;
  align-items: center;
  min-height: 50px;
`;

const Feedback = ({feedback}) =>  (
  <StyledFeedback className="feedback">
    <Typography variant="h2" fontSize={22} textAlign="center" my={0} mx="auto">       {feedback}
    </Typography>
  </StyledFeedback>
);

export default Feedback;