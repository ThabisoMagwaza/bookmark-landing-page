import Header from '@/components/Header';
import Section from '@/components/Section';
import Heading from '@/components/Heading';
import Paragraph from '@/components/Paragraph';
import FeatureTabs from '@/components/FeatureTabs';
import ExtensionCards from '@/components/ExtensionCards';

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
        <Section>
          <Heading level={2}>Download the extension</Heading>
          <Paragraph>
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize
          </Paragraph>

          <ExtensionCards />
        </Section>
      </main>
    </>
  );
}
