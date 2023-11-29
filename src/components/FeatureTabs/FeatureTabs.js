'use client';
import Image from 'next/image';
import * as Tabs from '@radix-ui/react-tabs';

import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Button from '../Button';
import styled from 'styled-components';
import ImageDecorator from '../ImageDecorator';
import { COLORS, QUERIES } from '@/lib/constants';

function FeatureTabs() {
  return (
    <TabsRoot defaultValue="tab1">
      <TabsList aria-label="Some main features offered by bookmark.com">
        <TabButton value="tab1">Simple Bookmarking</TabButton>
        <TabButton value="tab2">Speedy Searching</TabButton>
        <TabButton value="tab3">Easy Sharing</TabButton>
      </TabsList>
      <TabsContentWrapper
        value="tab1"
        style={{
          gap: '64px',
        }}
      >
        {/* <ImageDecorator blobPosition="left">
          <ImageWrapper>
            <ImageStyled
              src="/images/illustration-features-tab-1.svg"
              width={563}
              height={436}
              alt="An illustration of the bookmark tool on a desktop device"
            />
          </ImageWrapper>
        </ImageDecorator> */}

        <Content>
          <Heading level={2}>Bookmark in one click</Heading>
          <Paragraph>
            Organize your bookmarks however you like. Our simple drag-and-drop
            interface gives you complete control over how you manage your
            favourite sites.
          </Paragraph>

          <InfoButton>More info</InfoButton>
        </Content>
      </TabsContentWrapper>
      <TabsContentWrapper
        value="tab2"
        style={{
          gap: '120px',
        }}
      >
        <ImageDecorator blobPosition="left" blobOffset={80}>
          <ImageWrapper>
            <ImageStyled
              src="/images/illustration-features-tab-2.svg"
              width={478}
              height={416}
              alt="An illustration of the bookmark tool on a desktop device"
            />
          </ImageWrapper>
        </ImageDecorator>
        <Content>
          <Heading level={2}>Intelligent search</Heading>
          <Paragraph>
            Our powerful search feature will help you find saved sites in no
            time at all. No need to trawl through all of your bookmarks.
          </Paragraph>
          <InfoButton>More info</InfoButton>
        </Content>
      </TabsContentWrapper>
      <TabsContentWrapper
        value="tab3"
        style={{
          gap: '120px',
        }}
      >
        <ImageDecorator blobPosition="left" blobOffset={85}>
          <ImageWrapper>
            <ImageStyled
              src="/images/illustration-features-tab-3.svg"
              width={440}
              height={380}
              alt="An illustration of the bookmark tool on a desktop device"
            />
          </ImageWrapper>
        </ImageDecorator>
        <Content>
          <Heading level={2}>Share your bookmarks</Heading>
          <Paragraph>
            Easily share your bookmarks and collections with others. Create a
            shareable link that you can send at the click of a button.
          </Paragraph>
          <InfoButton>More info</InfoButton>
        </Content>
      </TabsContentWrapper>
    </TabsRoot>
  );
}

const InfoButton = styled(Button)`
  align-self: center;
`;

const TabsContentWrapper = styled(Tabs.TabsContent)`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ImageWrapper = styled.div`
  padding: 24px;
  overflow: hidden;
  border-radius: 5px;
`;

const ImageStyled = styled(Image)`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;

  max-width: 500px;

  position: relative;
`;

const TabsRoot = styled(Tabs.Root)`
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  /* align-items: center; */
`;

const TabsList = styled(Tabs.List)`
  display: flex;
  flex-direction: column;

  align-self: center;

  margin-bottom: 48px;

  @media ${QUERIES.phoneAndLarger} {
    flex-direction: revert;
  }
`;

const TabButton = styled(Tabs.Trigger)`
  position: relative;
  background: transparent;

  border: none;
  border-bottom: 1px solid ${COLORS.LightBorder};

  border-left: none;
  border-right: none;

  font-size: ${18 / 16}rem;
  color: hsl(229, 8%, 55%);
  font-weight: 500;

  padding: 18px 48px;

  &:first-child {
    border-top: 1px solid ${COLORS.LightBorder};
  }

  &[aria-selected='true'] {
    color: ${COLORS.TextActive};
  }

  &[aria-selected='true']::after {
    display: block;
    content: '';
    position: absolute;

    width: 50%;
    height: 4px;

    bottom: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;

    background: ${COLORS.SoftRed};
  }

  @media ${QUERIES.phoneAndLarger} {
    &:first-child {
      border-top: none;
    }
  }
`;

export default FeatureTabs;
