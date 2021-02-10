import styled from "styled-components";

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xxLarge};
  color: ${({ theme }) => theme.colours.secondary80};
  font-weight: normal;
`;

export default Title;
