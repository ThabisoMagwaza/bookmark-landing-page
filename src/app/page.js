import Header from '@/components/Header';
import Section from '@/components/Section';
import Heading from '@/components/Heading';
import Paragraph from '@/components/Paragraph';
import FeatureTabs from '@/components/FeatureTabs';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Section>
          <Heading level={2}>Features</Heading>
          <Paragraph>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </Paragraph>
          <FeatureTabs />
        </Section>
      </main>
    </>
  );
}
