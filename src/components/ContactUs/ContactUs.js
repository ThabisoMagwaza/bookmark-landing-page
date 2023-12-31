'use client';
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { COLORS, QUERIES } from '@/lib/constants';

import Heading from '../Heading';
import Button from '../Button';

const EmailRegex = new RegExp('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$');

function ContactUs() {
  const [email, setEmail] = React.useState('');
  const [touched, setTouched] = React.useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email || !EmailRegex.test(email)) {
      return;
    }

    alert('Email sent');

    setEmail('');
    setTouched(false);
  };

  let hasError = false;

  if (!email || !EmailRegex.test(email)) {
    hasError = true;
  }

  const showError = touched && hasError;

  return (
    <Wrapper>
      <Header>
        <Subtitle>35,000+ already joined</Subtitle>
        <Heading level={2} color={COLORS.White}>
          Stay up-to-date with what we’re doing
        </Heading>
      </Header>

      <Form onSubmit={onSubmit}>
        <ErrorWrapper $showError={showError}>
          <InputWrapper>
            <Input
              required
              placeholder="Enter your email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTouched(true)}
            />
            {touched && hasError && (
              <ErrorIcon
                src="/images/icon-error.svg"
                width={18}
                height={18}
                alt="An error icon illustration"
              />
            )}
          </InputWrapper>
          {touched && hasError && (
            <ErrorMessage>Whoops, make sure it&apos;s an email</ErrorMessage>
          )}
        </ErrorWrapper>
        <SubmitButton variant="tertiary">Contact Us</SubmitButton>
      </Form>
    </Wrapper>
  );
}

const SubmitButton = styled(Button)`
  flex-basis: 150px;
  flex-grow: 1;

  @media ${QUERIES.tableAndLarger} {
    flex-grow: revert;
  }
`;
const ErrorWrapper = styled.div`
  background: ${({ $showError }) => ($showError && COLORS.SoftRed) || 'revert'};
  color: ${COLORS.White};
  padding: 2px;
  border-radius: 5px;

  font-size: 14px;
  font-weight: 700;
  font-style: italic;
  text-align: start;

  flex-basis: 300px;
  flex-grow: 1;

  @media ${QUERIES.tableAndLarger} {
    flex-grow: revert;
  }
`;

const ErrorMessage = styled.p`
  margin: 5px 16px;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const ErrorIcon = styled(Image)`
  position: absolute;
  right: 12px;
  top: 0;
  bottom: 0;
  margin: auto 0;
`;

const Input = styled.input`
  width: 100%;
  font-size: 16px;
  border-radius: 5px;
  padding: 10px 16px;

  font-size: ${18 / 16}rem;
  font-weight: revert;
  font-style: revert;

  border: none;

  &::placeholder {
    color: ${COLORS.GrayishBlue};
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
`;

const Subtitle = styled.p`
  text-transform: uppercase;

  margin-bottom: 24px;
  font-size: ${14 / 16}rem;
  letter-spacing: 4px;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 16px;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  gap: 32px;

  background: ${COLORS.SoftBlue};
  color: ${COLORS.White};

  padding: 64px 24px;

  text-align: center;
`;

export default ContactUs;
