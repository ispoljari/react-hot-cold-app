import styled from 'styled-components';

const Progress = styled.div`
  margin-top: 10px;
`;
const History = styled.ul`
  display: flex;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-height: 30px;
  padding: 5px;
  list-style: none;
  color: black;
  font-size: 22px;
  overflow: -webkit-paged-x;
`;

export {
  Progress,
  History
}