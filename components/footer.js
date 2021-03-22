import styled from "styled-components"

const FooterContainer = styled.section`
  display: grid;
  place-items: center;
  height: 70px;
  background: ${({ theme }) => theme.colours.grey};
`

const Copyright = styled.small`
  color: #fff;
`

const Footer = () => (
  <FooterContainer>
    <Copyright>&copy; 2021, The Studio Klein</Copyright>
  </FooterContainer>
);

export default Footer;
