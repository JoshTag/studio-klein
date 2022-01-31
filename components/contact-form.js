import { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  background: ${({ theme }) => theme.colours.putty};
  padding: 4rem 1rem;
  flex-shrink: 0;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${({ theme }) => theme.breakpoints.tabletSmall} {
    width: 60%;
  }

  /* @media ${({ theme }) => theme.breakpoints.tablet} {
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
  } */
`;

const ContactHeader = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xxLarge};
  color: ${({ theme }) => theme.colours.mooGrey};
  font-weight: 300;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  & > label {
    color: ${({ theme }) => theme.colours.mooGrey};
    margin-bottom: 5px;
  }

  & > input,
  > textarea {
    background: ${({ theme }) => theme.colours.putty};
    border: 2px solid #231f20;
    height: 40px;
    padding: 5px 10px;
    margin-bottom: 1rem;
    border-radius: 3px;
  }

  & > textarea {
    height: 250px;
    resize: vertical;
    font-family: ${({ theme }) => theme.fonts.navigo};
  }

  & > button {
    margin-top: 2rem;
    background: transparent;
    color: ${({ theme }) => theme.colours.mooGrey};
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-family: ${({ theme }) => theme.fonts.primary};
    border: 2px solid ${({ theme }) => theme.colours.mooGrey};
    border-radius: 3px;
    height: 50px;
    transition: 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colours.putty};
      background: ${({ theme }) => theme.colours.mooGrey};
      cursor: pointer;
    }
  }
`;

const Message = styled.div`
  color: ${({ status }) => status ? "#ff7e7e" : "#FFF"};
  margin-top: 1rem;
  font-weight: 600;
`;

const ContactForm = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: {
      error: false,
      msg: null,
    },
  });

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });
    const text = await res.text();
    handleResponse(res.status, text);
  };

  return (
    <FormContainer>
      <ContactHeader>Contact Us</ContactHeader>
      <Form onSubmit={handleOnSubmit}>
        <label htmlFor='name'>name</label>
        <input
          className='contact-inputs'
          id='name'
          type='text'
          required
          value={inputs.name}
          onChange={handleOnChange}
        />
        <label htmlFor='email'>email</label>
        <input
          className='contact-inputs'
          id='email'
          type='email'
          required
          value={inputs.email}
          onChange={handleOnChange}
        />
        <label htmlFor='subject'>subject</label>
        <input
          className='contact-inputs'
          id='subject'
          type='text'
          required
          value={inputs.subject}
          onChange={handleOnChange}
        />
        <label htmlFor='message'>message</label>
        <textarea
          className='contact-inputs'
          id='message'
          type='text'
          required
          value={inputs.message}
          onChange={handleOnChange}
        />
        <button type='submit' disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? "submit"
              : "submitted"
            : "submitting..."}
        </button>
      </Form>
      {status.info.error && (
        <Message status={status.info.error}>
          <span>Error: {status.info.msg}</span>
        </Message>
      )}
      {!status.info.error && status.info.msg && (
        <Message status={status.info.error}>
          <span>{status.info.msg}</span>
        </Message>
      )}
    </FormContainer>
  );
};

export default ContactForm;
