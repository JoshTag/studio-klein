import styled from "styled-components";

const ListContainer = styled.div`
  background-color: ${({ theme }) => theme.colours.secondary80};
  padding: 3rem 0 1.5rem;
`;

const ListHeader = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colours.primary};
  font-size: ${({ theme }) => theme.colours.xLarge};
  padding-bottom: 1rem;
  font-weight: normal;
`;

const ListNav = styled.nav``;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.breakpoints.tabletSmall} {
    width: 350px;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
  }

  & > li:not(:last-child):after {
    @media ${({ theme }) => theme.breakpoints.tabletSmall} {
      position: absolute;
      content: "/";
      right: -20px;
      font-weight: 400;
    }
  }
`;

const ListItem = styled.li`
  position: relative;
  text-align: center;
  color: ${({ theme }) => theme.colours.primary};
  font-size: ${({ theme }) => theme.fontSize.small};
  padding: 0.2rem 0;

  @media ${({ theme }) => theme.breakpoints.tabletSmall} {
    padding: 0;
  }

  & > a {
    text-decoration: none;
    color: inherit;

    &:hover {
      cursor: pointer;
    }
  }
`;

const ProjectsNav = () => {
  return (
    <ListContainer>
      <ListHeader>Recent Projects</ListHeader>
      <ListNav>
        <List>
          <ListItem>
            <a href='#project-1'>Studio Zoubida</a>
          </ListItem>
          <ListItem>
            <a href='#coming-soon'>More Projects Coming Soon</a>
          </ListItem>
        </List>
      </ListNav>
    </ListContainer>
  );
};

export default ProjectsNav;
