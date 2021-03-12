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
  margin: 2rem 2.5%;

  @media ${({ theme }) => theme.breakpoints.tabletSmall} {
    width: 530px;
    margin: 2rem auto;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 630px;
  }

  @media ${({ theme }) => theme.breakpoints.tabletLarge} {
    width: 530px;
    margin: 4rem auto;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    width: 600px;
  }

  @media ${({ theme }) => theme.breakpoints.desktopLarge} {
    width: 700px;
  }

  @media ${({ theme }) => theme.breakpoints.desktopWide} {
    margin: 4rem 5rem;
  }
`;

const ContactHeader = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xxLarge};
  color: ${({ theme }) => theme.colours.grey};
  font-weight: normal;
  margin-top: 4rem 1rem;
  width: auto;
  text-align: center;

  @media ${({ theme }) => theme.breakpoints.tabletSmall} {
    text-align: left;
  }
`;

const TeamInfo = styled.div`
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.breakpoints.tabletSmall} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const TeamMember = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.tabletSmall} {
    max-width: 260px;
    align-items: flex-start;
  }

  @media ${({ theme }) => theme.breakpoints.tabletSmall} {
    width: 47%;
    max-width: 460px;
  }

  & > h3 {
    font-size: ${({ theme }) => theme.fontSize.xLarge};
    color: ${({ theme }) => theme.colours.grey};
    font-weight: normal;
    margin: 1rem 0;
  }

  & > p {
    font-size: ${({ theme }) => theme.fontSize.medium};
    margin: 1rem 0;
  }
`;

const TeamMemberPhoto = styled(Image)`
  border-radius: 2px;
`;

const scroll = keyframes`
  0% { transform: translateX(0); }
	100% { transform: translateX(-260px)}
`;

const ProjectURL = styled.div`
  & > a {
    position: relative;
    font-size: ${({ theme }) => theme.fontSize.small};
    color: ${({ theme }) => theme.colours.grey};
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
              <TeamMemberPhoto
                src='/images/contact-heather.png'
                width={304}
                height={385}
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
              <TeamMemberPhoto
                src='/images/contact-heather.png'
                width={304}
                height={385}
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
