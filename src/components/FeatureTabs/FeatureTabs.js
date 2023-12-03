'use client';
import Image from 'next/image';
import * as Tabs from '@radix-ui/react-tabs';

import { COLORS, QUERIES } from '@/lib/constants';

import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Button from '../Button';
import styled from 'styled-components';
import MaxWidthWrapper from '../MaxWidthWrapper';

function FeatureTabs() {
  return (
    <TabsRoot defaultValue="tab1">
      <TabsList aria-label="Some main features offered by bookmark.com">
        <TabButton value="tab1">Simple Bookmarking</TabButton>
        <TabButton value="tab2">Speedy Searching</TabButton>
        <TabButton value="tab3">Easy Sharing</TabButton>
      </TabsList>
      <TabsContentWrapper value="tab1">
        <Blob />
        <ContentWrapper>
          <ImageWrapper>
            <FeatureImage
              src="/images/illustration-features-tab-1.svg"
              width={536}
              height={346}
              alt="Desktop illustration"
            />
          </ImageWrapper>
          <Content>
            <Heading level={2}>Bookmark in one click</Heading>
            <Paragraph>
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
            </Paragraph>

            <InfoButton>More info</InfoButton>
          </Content>
        </ContentWrapper>
      </TabsContentWrapper>
      <TabsContentWrapper value="tab2">
        <Blob />
        <ContentWrapper>
          <ImageWrapper>
            <FeatureImage
              src="/images/illustration-features-tab-2.svg"
              width={478}
              height={416}
              alt="Desktop illustration"
            />
          </ImageWrapper>
          <Content>
            <Heading level={2}>Intelligent search</Heading>
            <Paragraph>
              Our powerful search feature will help you find saved sites in no
              time at all. No need to trawl through all of your bookmarks.
            </Paragraph>
            <InfoButton>More info</InfoButton>
          </Content>
        </ContentWrapper>
      </TabsContentWrapper>
      <TabsContentWrapper value="tab3">
        <Blob />
        <ContentWrapper>
          <ImageWrapper>
            <FeatureImage
              src="/images/illustration-features-tab-3.svg"
              width={440}
              height={380}
              alt="Desktop illustration"
            />
          </ImageWrapper>
          <Content>
            <Heading level={2}>Share your bookmarks</Heading>
            <Paragraph>
              Easily share your bookmarks and collections with others. Create a
              shareable link that you can send at the click of a button.
            </Paragraph>
            <InfoButton>More info</InfoButton>
          </Content>
        </ContentWrapper>
      </TabsContentWrapper>
    </TabsRoot>
  );
}

const ContentWrapper = styled(MaxWidthWrapper)`
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: relative;

  @media ${QUERIES.tableAndLarger} {
    flex-direction: row;
    gap: 64px;
  }
`;

const FeatureImage = styled(Image)`
  display: block;
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

const ImageWrapper = styled.div`
  flex: 1;
  margin-bottom: 48px;

  @media ${QUERIES.tableAndLarger} {
    margin: 0 -24px;
  }
`;

const Blob = styled.div`
  width: 80%;
  height: 180px;
  background: ${COLORS.SoftBlue};

  border-radius: 0 1000px 1000px 0;

  position: absolute;
  top: 100px;

  @media ${QUERIES.tableAndLarger} {
    width: 40%;
    height: 80%;
    bottom: -48px;
  }
`;

const InfoButton = styled(Button)`
  align-self: center;

  @media ${QUERIES.tableAndLarger} {
    align-self: flex-start;
  }
`;

const TabsContentWrapper = styled(Tabs.TabsContent)`
  display: flex;
  flex-direction: row;

  position: relative;

  &[data-state='inactive'] {
    display: none;
  }

  margin: 0 -24px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 16px;

  @media ${QUERIES.tableAndLarger} {
    text-align: start;

    flex: 1;
  }
`;

const TabsRoot = styled(Tabs.Root)`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

const TabsList = styled(Tabs.List)`
  display: flex;
  flex-direction: column;

  margin-bottom: 48px;

  @media ${QUERIES.phoneAndLarger} {
    flex-direction: revert;
    align-self: center;
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
