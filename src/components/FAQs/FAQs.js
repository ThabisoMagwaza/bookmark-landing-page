'use client';
import styled from 'styled-components';

import * as Accordion from '@radix-ui/react-accordion';
import { COLORS } from '@/lib/constants';
import Chevron from '../Chevron';
import Button from '../Button';

function FAQs() {
  return (
    <Wrapper>
      <Accordion.Root collapsible defaultValue="item-1">
        <Item value="item-1">
          <Trigger>
            <Heading>What is Bookmark?</Heading>
            <Chevron />
          </Trigger>
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
            quis quam ornare mattis.
          </Content>
        </Item>
        <Item value="item-2">
          <Trigger>
            <Heading>How can I request a new browser?</Heading>
            <Chevron />
          </Trigger>
          <Content>
            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
            ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
            aliquet convallis ultricies. Mauris augue massa, ultricies non
            ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis
            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse
            imperdiet.
          </Content>
        </Item>
        <Item value="item-3">
          <Trigger>
            <Heading>Is there a mobile app?</Heading>
            <Chevron />
          </Trigger>
          <Content>
            Sed consectetur quam id neque fermentum accumsan. Praesent luctus
            vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula
            quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin
            ex et ultricies bibendum.
          </Content>
        </Item>
        <Item value="item-4">
          <Trigger>
            <Heading>What about other Chromium browsers?</Heading>
            <Chevron />
          </Trigger>
          <Content>
            Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat
            mi, at euismod dui. Aliquam vitae neque eget nisl gravida
            pellentesque non ut velit.
          </Content>
        </Item>
      </Accordion.Root>
      <InfoButton>More info</InfoButton>
    </Wrapper>
  );
}

const InfoButton = styled(Button)`
  align-self: center;
`;

const Item = styled(Accordion.Item)`
  width: 100%;
`;

const Wrapper = styled(Accordion.Root)`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const Heading = styled.h4`
  color: ${COLORS.VeryDarkBlue};
`;

const Content = styled(Accordion.Content)`
  text-align: start;
  font-size: 1rem;
  color: ${COLORS.GrayishBlue};

  border-bottom: 1px solid ${COLORS.LightBorder};

  padding: 16px 0;
`;

const Trigger = styled(Accordion.Trigger)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  text-align: start;

  color: ${COLORS.SoftBlue};

  font-size: 1rem;
  width: 100%;

  padding: 18px 0;

  border: none;
  background: transparent;

  outline-offset: 5px;

  &[data-state='closed'] {
    border-bottom: 1px solid ${COLORS.LightBorder};
  }

  &[data-state='open'] {
    color: ${COLORS.SoftRed};
  }

  &[data-state='open'] svg {
    transform: rotate(180deg);
  }
`;

export default FAQs;
