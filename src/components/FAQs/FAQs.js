'use client';
import Image from 'next/image';
import styled from 'styled-components';

import * as Accordion from '@radix-ui/react-accordion';
import { COLORS } from '@/lib/constants';
import Chevron from '../Chevron';

function FAQs() {
  return (
    <Accordion.Root collapsible defaultValue="item-1">
      <Accordion.Item value="item-1">
        <Trigger>
          <Heading>What is Bookmark?</Heading>
          <Chevron />
        </Trigger>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis
          quam ornare mattis.
        </Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Trigger>
          <Heading>How can I request a new browser?</Heading>
          <Chevron />
        </Trigger>
        <Content>
          Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
          ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
          aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.
          Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.
          Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
        </Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Trigger>
          <Heading>Is there a mobile app?</Heading>
          <Chevron />
        </Trigger>
        <Content>
          Sed consectetur quam id neque fermentum accumsan. Praesent luctus
          vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula
          quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex
          et ultricies bibendum.
        </Content>
      </Accordion.Item>
      <Accordion.Item value="item-4">
        <Trigger>
          <Heading>What about other Chromium browsers?</Heading>
          <Chevron />
        </Trigger>
        <Content>
          Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat
          mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque
          non ut velit.
        </Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}

const Heading = styled.h4`
  color: ${COLORS.VeryDarkBlue};
`;

const Content = styled(Accordion.Content)`
  text-align: start;
  font-size: 1rem;
  color: ${COLORS.GrayishBlue};

  padding: 16px 0;
`;

const Trigger = styled(Accordion.Trigger)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  text-align: start;

  color: ${COLORS.SoftBlue};

  font-size: 1rem;
  width: 100%;

  padding: 18px 0;

  border: none;
  border-bottom: 1px solid ${COLORS.LightBorder};
  background: transparent;

  &[data-state='open'] {
    color: ${COLORS.SoftRed};
  }

  &[data-state='open'] svg {
    transform: rotate(180deg);
  }
`;

export default FAQs;
