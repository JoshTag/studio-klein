import styled from "styled-components";

const FooterContainer = styled.section`
  display: grid;
  place-items: center;
  height: 100px;
  background: ${({ theme }) => theme.colours.grey};
`;

const Copyright = styled.small`
  color: #fff;
  font-size: 16px;
  display: block;
  text-align: center;
  margin-bottom: 20px;
`;

const Social = styled.a`
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  display: block;
  text-align: center;
  width: 20px;
  height: 20px;
  margin: 0 auto;

  & > img {
    width: 100%;
    height: 100%;
  }
`;

const Footer = () => (
  <FooterContainer>
    <div>
      <Copyright>&copy; 2021, The Studio Klein</Copyright>
      <Social
        href='https://www.instagram.com/thestudioklein'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src="/images/instagram.svg"/>
      </Social>
    </div>
  </FooterContainer>
);

export default Footer;
