import styled from 'styled-components';

const Author = styled.div`
  display: flex;
  justify-content: center;
`;

const Social = styled(Author)`
  margin-top: 5px;

  img {
    width: 35px;
    display: block;
  }
`;

const LinkedIn = styled.div``;
const Github = styled(LinkedIn)`
  margin-left: 10px;
`;

export {
  Author,
  Social,
  LinkedIn,
  Github
}