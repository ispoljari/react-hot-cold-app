import React from 'react';
import linkedinLogo from '../../svg/linkedin.svg';
import githubLogo from '../../svg/github.svg';

import * as Styled from './style';
import { Typography } from '@smooth-ui/core-sc';

const Author = () => (
  <div>
    <Styled.Author>
      <Typography variant="h3" textAlign="center" fontSize={20}>
        <small>Developed by</small> <strong>Ivan Špoljarić</strong>
      </Typography>
    </Styled.Author>
    <Styled.Social>
      <Styled.LinkedIn>
        <a href="https://www.linkedin.com/in/ivan-špoljarić-2206a184" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn logo small icon" />
        </a>
      </Styled.LinkedIn>
      <Styled.Github>
        <a href="https://github.com/ispoljari" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="Github logo small icon" />
        </a>
      </Styled.Github>
    </Styled.Social>
  </div>
)

export default Author;