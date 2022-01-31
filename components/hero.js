import styled from "styled-components";
import LottieData from "components/lottie";
import branding from "./../public/images/2022-branding-2.json";

const HeroSection = styled.section`
  position: relative;
  overflow: hidden;
  margin-top: 50px;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    height: 100vh;
    width: 100vw;
    margin-top: 0;
  }
`;

const HeroImages = styled.div`
  /* width: 100%;
  height: 575px;
  z-index: -1;
  position: relative;
  margin-top: 50px;

  @media ${({ theme }) => theme.breakpoints.mobileLarge} {
    height: 620px;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    height: 850px;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    height: auto;
    width: 50%;
    margin-top: 0; 
  }*/
`;

const ImageWrapper = styled.div`
  position: relative;
  display:flex;
  justify-content: center;
  align-items: center;
  width: 300px; 

  & > .lottie {
    position: absolute;
    width: 190px;
    top: 70px;
    left: 105px;

    @media ${({ theme }) => theme.breakpoints.mobileLarge} {
      width: 220px;
      left: 105px;
    }

    @media ${({ theme }) => theme.breakpoints.tablet} {
      width: 300px;
      left: 120px;
      top: 100px;
    }

    @media ${({ theme }) => theme.breakpoints.desktop} {
      width: 270px;
      left: 140px;
      top: 260px;
      z-index: 100;
    }

    @media ${({ theme }) => theme.breakpoints.desktopLarge} {
      left: 170px;
    }

    @media ${({ theme }) => theme.breakpoints.desktopWide} {
      width: 310px;
      left: 180px;
      top: 260px;
    }
  }
`;

const Wrapper = styled.div`


  @media ${({ theme }) => theme.breakpoints.mobileLarge} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    justify-content: center;
    align-items: center;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    flex-direction: row;
  }
`;

const HeroDescription = styled.div`
  @media ${({ theme }) => theme.breakpoints.desktop} {
    width: 50%;
  }
`;

const HeroHeader = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xxLarge};
  line-height: 40px;
  margin-bottom: 1.5rem;
  font-weight: normal;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    padding-top: 2rem;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    padding-top: 4rem;
  }

  .svg-header {
    width: 288px;
  }
`;

const HeroParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: 27px;
  margin-bottom: 1.5rem;
  display: inline-block;
`;

const HeroParagraphPartner = styled(HeroParagraph)`
  display: flex;
  align-items: end;
  margin-bottom: 3rem;

  & > img {
    width: 100px;
    margin-right: 8px;
  }
`;

const ButtonStyle = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.colours.tan};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colours.grey};
  border: 1px solid ${({ theme }) => theme.colours.grey};
  border-radius: 3px;
  padding: 0.5rem;
  text-align: center;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colours.grey};
    color: ${({ theme }) => theme.colours.primary};
  }
`;

const MobileCTA = styled(ButtonStyle)`
  width: 100%;
  bottom: 0;

  &:hover {
    cursor: pointer;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    display: none;
  }
`;

const CTA = styled(ButtonStyle)`
  display: none;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    width: 200px;
    display: block;
    margin-top: 2rem;
  }
`;

const Hero = () => {
  return (
    <>


      <style global jsx>
        {`
        @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&display=swap");

        // body {

        // }

        // .header-ctn{
        //   position: relative;
        // }
        // .header-ctn-inner{
        //   border-radius:5px;
        //   border: 1px solid black;
        //   padding: 1rem;
        //   position:relative;
        // }
        // .header-ctn-top{
        //   display:flex;
        //   justify-content:space-between;
        // }
        // .header-ctn-btm{
        //   display:flex;
        //   justify-content:space-between;
        // }
                                                      
        `}
      </style>
    </>


  );
};

export default Hero;
