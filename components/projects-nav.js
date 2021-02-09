import styled from "styled-components";

const ListContainer = styled.div`
  background-color: ${({ theme }) => theme.colours.secondary80};
  padding: 3rem 0 1.5rem;
`;

const ListHeader = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colours.primary};
  font-size: ${({ theme }) => theme.colours.large};
  padding-bottom: 2rem;
`;

const ListNav = styled.nav``;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ListItem = styled.li`
  text-align: center;
  color: ${({ theme }) => theme.colours.primary};
  font-size: ${({ theme }) => theme.fontSize.xSmall};
`;

const ProjectsNav = () => {
  return (
    <ListContainer>
      <ListHeader>Recent Projects</ListHeader>
      <ListNav>
        <List>
          <ListItem>Studio Zoubida</ListItem>
          <ListItem>Queer Power Fitness</ListItem>
          <ListItem>Calzuro</ListItem>
          <ListItem>Parade Underware</ListItem>
        </List>
      </ListNav>
    </ListContainer>
  );
};

export default ProjectsNav;
