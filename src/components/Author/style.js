import styled from 'styled-components';

const Author = styled.div`
  display: flex;
  justify-content: center;
`;

const Social = styled(Author)`
  margin-top: 5px;

  img {
    width: 36px;
    display: block;
  }
`;

const LinkedIn = styled.div`
  background-color: white;
  border-radius: 10px;
`;

const Github = styled(LinkedIn)`
  margin-left: 10px;
  border-radius: 20px;
`;

export {
  Author,
  Social,
  LinkedIn,
  Github
}