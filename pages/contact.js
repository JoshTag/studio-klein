import Image from "next/image";
import Layout from "components/layout";
import ContactForm from "components/contact-form";
import styled, { keyframes } from "styled-components";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media ${({ theme }) => theme.breakpoints.tabletLarge} {
    flex-direction: row;
  }
`;

const TeamContainer = styled.div`
  width: 100%;
`;

const ContactHeader = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xxLarge};
  color: ${({ theme }) => theme.colours.secondary80};
  font-weight: normal;
  margin: 4rem 1rem 0;
  width: auto;

  @media ${({ theme }) => theme.breakpoints.tabletSmall} {
    margin: 4rem 2rem 0;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    margin: 4rem 4rem 1rem;
  }
`;

const TeamInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 1rem;

  @media ${({ theme }) => theme.breakpoints.tabletSmall} {
    margin: 2rem 2rem;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 0 2rem 0;
    padding: 1rem 0 0;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 4rem 0;
    padding: 0;
  }

  @media ${({ theme }) => theme.breakpoints.desktopLarge} {
    margin: 0 4rem 0;
    /* max-width: 810px; */
  }

  /* @media ${({ theme }) => theme.breakpoints.desktopWide} {
    width: 800px;
    margin: 0 auto 0;
    padding: 4rem 0 0;
  } */
`;

const TeamMember = styled.div`
  margin-bottom: 2rem;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    width: 47%;
    max-width: 460px;
  }

  & > h3 {
    font-size: ${({ theme }) => theme.fontSize.xLarge};
    color: ${({ theme }) => theme.colours.secondary80};
    font-weight: normal;
    margin: 1rem 0;
  }

  & > p {
    font-size: ${({ theme }) => theme.fontSize.medium};
    margin: 1rem 0;
  }
`;

const scroll = keyframes`
  0% { transform: translateX(0); }
	100% { transform: translateX(-260px)}
`;

const ProjectURL = styled.div`
  & > a {
    position: relative;
    font-size: ${({ theme }) => theme.fontSize.small};
    color: ${({ theme }) => theme.colours.secondary80};
    margin-bottom: 2rem;
    display: inline-block;
    text-decoration: none;
    height: 40px;
    overflow: hidden;
    text-decoration: none;

    &:after,
    :before {
      content: "";
      position: absolute;
      width: 260px;
      height: 10px;
      bottom: 0px;
      background: url(/images/link-underline-black.svg) no-repeat;
      animation: ${scroll} 15s linear infinite;
    }

    &:after {
      left: 0;
    }

    &:before {
      left: 259px;
    }
  }
`;

const Contact = () => {
  return (
    <Layout>
      <ContactContainer>
        <ContactForm />
        <TeamContainer>
          <ContactHeader>Meet the Team</ContactHeader>
          <TeamInfo>
            <TeamMember>
              <Image
                src='/images/contact-heather.png'
                width={460}
                height={582}
              />
              <h3>Joshua Taguicana</h3>
              <p>Josh is the technical genius</p>
              <ProjectURL>
                <a href='mailto:josh.taguicana@thestudioklein.com'>
                  josh.taguicana@thestudioklein.com
                </a>
              </ProjectURL>
            </TeamMember>
            <TeamMember>
              <Image
                src='/images/contact-heather.png'
                width={460}
                height={582}
              />
              <h3>Heather Alsen</h3>
              <p>Heather makes it beautiful</p>
              <ProjectURL>
                <a href='mailto:heather.alsen@thestudioklein.com'>
                  heather.alsen@thestudioklein.com
                </a>
              </ProjectURL>
            </TeamMember>
          </TeamInfo>
        </TeamContainer>
      </ContactContainer>
    </Layout>
  );
};

export default Contact;
