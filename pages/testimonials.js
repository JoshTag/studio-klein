import Layout from "components/layout";
import Head from "next/head";
import styled from "styled-components";


const TestimonialsContainer = styled.div`
  margin: 2%;
  border: 2px solid #231f20;
  border-radius: 5px;
  padding: 0%;

   @media ${({ theme }) => theme.breakpoints.tablet} {
    padding: 3rem 3rem 7rem 3rem;
    display:flex;
  }
`;

const TestimonialItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom:none;
  padding: 2rem;
  flex-direction:column-reverse;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    flex-direction:row;
    border-bottom: 2px solid #231f20;
  }
`;

const TestimonialName = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xLarge};
  color: ${({ theme }) => theme.colours.grey};
  font-weight: 600;
  width: auto;
  text-align: left;
  line-height: 30px;
`;

const TestimonialImg = styled.img`
  align-self:center;
  width:33%;
  padding:1rem;

 @media ${({ theme }) => theme.breakpoints.tablet} {
  width:70%;
  margin: 1rem 0;
  }
`;

const TestimonialContent = styled.div`
  text-align: center;
  line-height: 34px;
`;

const Testimonials = () => {
  return (
    <Layout>
      <Head>
        <title>Studio Klein | Testimonials</title>
      </Head>
      {/* <TestimonialsHeader>Testimonials</TestimonialsHeader> */}
      <TestimonialsContainer>
        <TestimonialItem>
          <div className='testimonials-ctn-1'>
          <TestimonialImg
            src='/images/projects/testimonials/circle.svg'
            imgWidth='200px'
          />
          <TestimonialName>
            <p className='testimonial-name'>Alisha M.</p>
            <p className='testimonial-title'>Rainstick, Owner</p>
          </TestimonialName>
          </div>
          <div className='testimonials-ctn-2'>
          <TestimonialContent>
            <p className='testimonials-lrg-txt'>"continued to surpass our expectations"</p>
            <p className='testimonials-small-txt'>
              Heather and Josh are creative and professional and I wouldn't think twice 
              about working with them again. Over the course of our website development, 
              they continued to surpass our expectations - and we weren't an easy client 
              by any means! We had a lot of moving parts and people to manage and they 
              handled it seamlessly. I would highly recommend working with them and 
              look forward when we get to again (which will be soon!).

            </p>
          </TestimonialContent>
          </div>
        </TestimonialItem>
       
      </TestimonialsContainer>
      <TestimonialsContainer>
        <TestimonialItem>
          <div className='testimonials-ctn-1'>
          <TestimonialImg
            src='/images/projects/testimonials/circle.svg'
            imgWidth='200px'
          />
          <TestimonialName>
            <p className='testimonial-name'>John H.</p>
            <p className='testimonial-title'>The Pielander, Owner</p>
          </TestimonialName>
          </div>
          <div className='testimonials-ctn-2'>
          <TestimonialContent>
            <p className='testimonials-lrg-txt'>"better than I
            could have imagined."</p>
            <p className='testimonials-small-txt'>I am thrilled with the work Studio Klein has produced. I needed a
            website but knew nothing about design. Heather and Josh talked me
            through the creative process, listened to my needs, and made
            suggestions based on them. The end product was even better than I
            could have imagined. Not only was I shown how everything works, I
            was provided with excellent after care with regards to an issue or
            questions. I can't recommend Studio Klein enough.The Studio Klein
            are not only professional, creative and highly experienced, they
            also care about making sure the customer is happy with the end
            product. The whole process was a dream!
            </p>
          </TestimonialContent>
          </div>
        </TestimonialItem>
       
      </TestimonialsContainer>
      <TestimonialsContainer>
        <TestimonialItem>
          <div className='testimonials-ctn-1'>
          <TestimonialImg
            src='/images/projects/testimonials/circle.svg'
            imgWidth='200px'
          />
          <TestimonialName>
            <p className='testimonial-name'>Becca T.</p>
            <p className='testimonial-title'>Moo Vintage, Owner</p>
          </TestimonialName>
          </div>
          <div className='testimonials-ctn-2'>
          <TestimonialContent>
            <p className='testimonials-lrg-txt'>"for a stand-out brand identity, this is the place to come"</p>
            <p className='testimonials-small-txt'>
              
            If you are looking for a stand-out brand identity, this is the place to come! I only had a vague idea of what I wanted to do with my shop, but the Studio Klein created a stunning brand identity, which I continue to get compliments on! Customers are really drawn to the site and I had a increase in sales since working with SK. 
            </p>
          </TestimonialContent>
          </div>
        </TestimonialItem>
       
      </TestimonialsContainer>
    </Layout>
  );
};

export default Testimonials;
