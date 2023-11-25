'use client';
import * as Tabs from '@radix-ui/react-tabs';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Button from '../Button';
import styled from 'styled-components';
import { COLORS } from '@/lib/constants';

function FeatureTabs() {
  return (
    <TabsRoot defaultValue="tab1">
      <TabsList aria-label="Some main features offered by bookmark.com">
        <TabButton value="tab1">Simple Bookmarking</TabButton>
        <TabButton value="tab2">Speedy Searching</TabButton>
        <TabButton value="tab3">Easy Sharing</TabButton>
      </TabsList>
      <Tabs.Content value="tab1">
        <Heading level={2}>Bookmark in one click</Heading>
        <Paragraph>
          Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites.
        </Paragraph>
      </Tabs.Content>
      <Tabs.Content value="tab2">
        <Heading level={2}>Intelligent search</Heading>
        <Paragraph>
          Our powerful search feature will help you find saved sites in no time
          at all. No need to trawl through all of your bookmarks.
        </Paragraph>
        <Button>More info</Button>
      </Tabs.Content>
      <Tabs.Content value="tab3">
        <Heading level={2}>Share your bookmarks</Heading>
        <Paragraph>
          Easily share your bookmarks and collections with others. Create a
          shareable link that you can send at the click of a button.
        </Paragraph>
        <Button>More info</Button>
      </Tabs.Content>
    </TabsRoot>
  );
}

const TabsRoot = styled(Tabs.Root)`
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-top: 32px;
`;

const TabsList = styled(Tabs.List)`
  display: flex;
  flex-direction: column;
`;

const TabButton = styled(Tabs.Trigger)`
  position: relative;
  background: transparent;

  border: none;
  border-bottom: 1px solid hsl(229, 8%, 85%);

  border-left: none;
  border-right: none;

  font-size: ${18 / 16}rem;
  color: hsl(229, 8%, 55%);
  font-weight: 500;

  padding: 18px;

  &:first-child {
    border-top: 1px solid hsl(229, 8%, 85%);
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

    background: orangered;
  }
`;

export default FeatureTabs;
