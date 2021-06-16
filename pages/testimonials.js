import Layout from "components/layout";
import Head from "next/head";
import styled from "styled-components";

const TestimonialsHeader = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xxLarge};
  color: ${({ theme }) => theme.colours.grey};
  font-weight: 300;
  margin: 4rem 0 1rem;
  width: auto;
  text-align: center;
`;

const TestimonialsContainer = styled.div`
  margin: 2rem 2.5%;
  padding-bottom: 4rem;

  @media ${({ theme }) => theme.breakpoints.tabletSmall} {
    width: 530px;
    margin: 2rem auto;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    display: flex;
    flex-direction: row;
    width: 1000px;
  }

  @media ${({ theme }) => theme.breakpoints.desktopLarge} {
    width: 1100px;
  }

  @media ${({ theme }) => theme.breakpoints.desktopLarge} {
    width: 1200px;
  }
`;

const TestimonialItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.mobileLarge} {
    width: 465px;
    margin: 0 auto;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 500px;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    width: 305px;
  }
`;

const TestimonialName = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xLarge};
  color: ${({ theme }) => theme.colours.grey};
  font-weight: 300;
  margin: 4rem 0 0;
  width: auto;
  text-align: center;
`

const TestimonialImg = styled.img`
  width: ${({ imgWidth }) => imgWidth };
  margin: 2rem 0;
`

const TestimonialContent = styled.p`
  text-align: center;
  line-height: 34px;
`

const Testimonials = () => {
  return (
    <Layout>
      <Head>
        <title>Studio Klein | Testimonials</title>
      </Head>
      <TestimonialsHeader>Testimonials</TestimonialsHeader>
      <TestimonialsContainer>
        <TestimonialItem>
          <TestimonialName>
            Pree Rehal,
            <br />
            Artist & Educator
          </TestimonialName>
          <TestimonialImg src="/images/projects/pree/logo-1.svg" imgWidth="100px"/>
          <TestimonialContent>
            Heather and Joshua were such a pleasure to work with! They were very
            attentive, professional and helpful. Would definitely recommend
            Studio Klein for logo and web design.
          </TestimonialContent>
        </TestimonialItem>
        <TestimonialItem>
          <TestimonialName>
            Sandy,
            <br />
            Owner - OPERATION SOAP
          </TestimonialName>
          <TestimonialImg src="/images/projects/soap/logo.svg" imgWidth="140px"/>
          <TestimonialContent>
            Studio Klein is a stellar partner for our small business website
            needs. Their approach to having both technical and design expertise
            made our work with them easy and quick. At every turn they had
            insightful suggestions that helped maximize our ability to
            merchandise, makes sales and deepen our relationship with our
            customer. We’re looking forward to working with them again as our
            business grows!
          </TestimonialContent>
        </TestimonialItem>
        <TestimonialItem>
          <TestimonialName>
            John,
            <br />
            Owner - Pielander
          </TestimonialName>
          <TestimonialImg src="/images/projects/the-pielander/logo-alt.png" imgWidth="200px"/>
          <TestimonialContent>
            Coming Soon.
          </TestimonialContent>
        </TestimonialItem>
      </TestimonialsContainer>
    </Layout>
  );
};

export default Testimonials;
