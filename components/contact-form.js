import styled from "styled-components";

const FormContainer = styled.div`
  background: ${({ theme }) => theme.colours.lightGrey};
  padding: 4rem 1rem;
  flex-shrink: 0;

  @media ${({ theme }) => theme.breakpoints.tabletSmall} {
    padding: 4rem 2rem;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    padding: 4rem;
  }

  @media ${({ theme }) => theme.breakpoints.tabletLarge} {
    padding: 4rem 2rem;
    width: 320px;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    width: 350px;
  }

  @media ${({ theme }) => theme.breakpoints.desktopLarge} {
    width: 400px;
  }

  @media ${({ theme }) => theme.breakpoints.desktopWide} {
    width: 450px;
  }
`;

const ContactHeader = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xxLarge};
  color: ${({ theme }) => theme.colours.primary};
  font-weight: normal;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  & > label {
    color: ${({ theme }) => theme.colours.primary};
    margin-bottom: 5px;
  }

  & > input,
  > textarea {
    background: ${({ theme }) => theme.colours.primary};
    border: none;
    height: 40px;
    padding: 5px 10px;
    margin-bottom: 1rem;
    border-radius: 2px;
  }

  & > textarea {
    height: 250px;
    resize: vertical;
  }

  & > button {
    margin-top: 2rem;
    background: transparent;
    color: ${({ theme }) => theme.colours.primary};
    font-size: ${({ theme }) => theme.fontSize.medium};
    border: 1px solid ${({ theme }) => theme.colours.primary};
    border-radius: 2px;
    height: 50px;
    transition: 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colours.grey};
      background: ${({ theme }) => theme.colours.primary};
      cursor: pointer;
    }
  }
`;

const ContactForm = () => {
  return (
    <FormContainer>
      <ContactHeader>Contact Form</ContactHeader>
      <Form>
        <label>name</label>
        <input
          className='contact-inputs'
          name='name'
          type='text'
          required
        />
        <label>email</label>
        <input
          className='contact-inputs'
          name='email'
          type='email'
          required
        />
        <label>subject</label>
        <input className='contact-inputs' name='subject' type='text' required />
        <label>message</label>
        <textarea
          className='contact-inputs'
          name='message'
          type='text'
          required
        />
        <button type='submit'>
          submit
        </button>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
