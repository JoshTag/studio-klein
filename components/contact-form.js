import styled from "styled-components";

const FormContainer = styled.div`
  background: ${({ theme }) => theme.colours.secondary80};
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
    width: 350px;
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
  }

  & > input,
  > textarea {
    background: ${({ theme }) => theme.colours.primary};
    border: none;
    height: 40px;
    padding: 5px 10px;
    margin-bottom: 1rem;
  }

  & > textarea {
    height: 250px;
    resize: vertical;
  }

  & > button {
    margin-top: 2rem;
    background: ${({ theme }) => theme.colours.secondary70};
    color: ${({ theme }) => theme.colours.primary};
    font-size: ${({ theme }) => theme.fontSize.medium};
    border: none;
    border-radius: 5px;
    height: 50px;
    max-width: 600px;
  }
`;

const ContactForm = () => {
  return (
    <FormContainer>
      <ContactHeader>Contact Form</ContactHeader>
      <Form>
        <label>name</label>
        <input className='contact-inputs' name='name' type='text' required />
        <label>email</label>
        <input className='contact-inputs' name='email' type='text' required />
        <label>subject</label>
        <input className='contact-inputs' name='subject' type='text' required />
        <label>message</label>
        <textarea
          className='contact-inputs'
          name='message'
          type='text'
          required
        />
        <button type='submit'>submit</button>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
