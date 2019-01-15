import React from 'react';
import linkedinLogo from '../../svg/linkedin.svg';
import githubLogo from '../../svg/github.svg';
import './Author.css';
import styled from 'styled-components';
import { Typography } from '@smooth-ui/core-sc';

const StyledAuthor = styled.div`
  display: flex;
  justify-content: center;
`;

const Author = () => (
  <div>
    <StyledAuthor>
      <Typography variant="h3" textAlign="center" fontSize={20}>
        <small>Developed by</small> <strong>Ivan Špoljarić</strong>
      </Typography>
    </StyledAuthor>
    <div className="author__social">
      <div className="social__linkedin">
        <a href="https://www.linkedin.com/in/ivan-špoljarić-2206a184" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn logo small icon" />
        </a>
      </div>
      <div className="social__github">
        <a href="https://github.com/ispoljari" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="Github logo small icon" />
        </a>
      </div>
    </div>
  </div>
)

export default Author;