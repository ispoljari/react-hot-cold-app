import React from 'react';
import { Typography } from '@smooth-ui/core-sc';
import styled from 'styled-components';

const StyledProgress = styled.div`
  margin-top: 10px;
`;
const StyledHistory = styled.ul`
  display: flex;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-height: 30px;
  padding: 5px;
  list-style: none;
  color: black;
  font-size: 24px;

  li {
    color: #fff;
    margin-right: 8px;
    padding: 2px;
    border-radius: 4px;
  }
`;

const Progress = ({attempt, guessList}) => (
  <StyledProgress>
    <Typography variant="h2" textAlign="center" color="black">
      Guess #{attempt}
    </Typography>
    <StyledHistory>
      {guessList}
    </StyledHistory>
  </StyledProgress>
);

export default Progress;