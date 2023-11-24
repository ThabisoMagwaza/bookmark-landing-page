'use client';
import styled from 'styled-components';
import Image from 'next/image';

import { COLORS } from '@/lib/constants';
import UnstyledButton from '../UnstyledButton';

function Header() {
  return (
    <Wrapper>
      <Navigation>
        <Logo
          width={128}
          height={25}
          src="/images/logo-bookmark.svg"
          alt="bookmark logo"
          priority={true}
        />

        <HamburgerButton onClick={() => console.log('show menu')}>
          <HamburgerIcon
            width={18}
            height={15}
            src="/images/icon-hamburger.svg"
            alt="menu button icon"
          />
        </HamburgerButton>
      </Navigation>

      <HeroWrapper>
        <Blob />

        <HeroImageWrapper>
          <HeroImage
            src="/images/illustration-hero.svg"
            width={657}
            height={466}
            alt="An illustration of the bookmark tool on a desktop device"
          />
        </HeroImageWrapper>
      </HeroWrapper>
    </Wrapper>
  );
}

const HeroImageWrapper = styled.div`
  height: 250px;
`;

const HeroWrapper = styled.div`
  position: relative;
  margin: 64px -24px 24px -24px;
`;

const Blob = styled.div`
  height: 200px;
  width: 100%;

  border-radius: 1000px;
  background: ${COLORS.SoftBlue};

  position: absolute;
  bottom: -10px;
  right: -25%;
`;

const HeroImage = styled(Image)`
  display: block;
  object-fit: fill;
  width: 100%;
  height: 100%;

  position: relative;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled(Image)``;

const HamburgerIcon = styled(Image)`
  pointer-events: none;
`;

const Wrapper = styled.header`
  padding: 24px;

  max-width: 1000px;
  margin: 0 auto;

  overflow: hidden;
`;

const HamburgerButton = styled(UnstyledButton)`
  padding: 16px;
  margin: -16px;

  cursor: pointer;
`;

export default Header;
