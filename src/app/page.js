'use client';
import styled from 'styled-components';

import Header from '@/components/Header';
import Section from '@/components/Section';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <SectionOne></SectionOne>
      </main>
    </>
  );
}

const SectionOne = styled(Section)`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;
