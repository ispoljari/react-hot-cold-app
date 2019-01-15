import styled from 'styled-components';

const LandmarkContainer = styled.div`
  max-width: 380px;
  margin: 0 auto;
`;

const ListItem = styled.li`
  color: #fff;
  background-color: ${props => props.color};
  margin-right: 8px;
  padding: 2px;
  border-radius: 4px;
`;

export {
  LandmarkContainer,
  ListItem
};