'use client';
import styled from 'styled-components';
import ExtensionCard from '../ExtensionCard';
import { QUERIES } from '@/lib/constants';

function ExtensionCards() {
  return (
    <Wrapper>
      <ExtensionCard
        title="Add to Chrome"
        subtite="Minimum version 62"
        logoSrc="/images/logo-chrome.svg"
      />
      <ExtensionCard
        title="Add to Firefox"
        subtite="Minimum version 55"
        logoSrc="/images/logo-firefox.svg"
      />
      <ExtensionCard
        title="Add to Opera"
        subtite="Minimum version 46"
        logoSrc="/images/logo-opera.svg"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media ${QUERIES.phoneAndLarger} {
    flex-direction: revert;
    justify-content: center;
  }
`;

export default ExtensionCards;
