import styled from "styled-components";
import { smoothScrollTo } from "../utils/gsap";

const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colours.header};
  padding-bottom: 1.5rem;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.breakpoints.tabletSmall} {
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;
  }

  & > li:not(:last-child):after {
    @media ${({ theme }) => theme.breakpoints.tabletSmall} {
      position: absolute;
      content: "/";
      right: -19px;
      top: 0;
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
    margin: 0 1rem;
  }

  & > div {
    text-decoration: none;
    color: inherit;

    &:hover {
      cursor: pointer;
    }
  }
`;

const PageSubheader = ({ subheadings }) => {
  return (
    <HeaderContainer>
      <nav>
        <List>
          {subheadings.map((item) => (
            <ListItem key={item}>
              <div
                onClick={() =>
                  smoothScrollTo(`#${item.toLowerCase().split(" ").join("")}`)
                }
              >
                {item}
              </div>
            </ListItem>
          ))}
        </List>
      </nav>
    </HeaderContainer>
  );
};

export default PageSubheader;
