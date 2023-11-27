'use client';
import styled from 'styled-components';
import Image from 'next/image';

import UnstyledButton from '../UnstyledButton';

import Heading from '@/components/Heading';
import Paragraph from '@/components/Paragraph';
import Button from '@/components/Button';
import { COLORS } from '@/lib/constants';

import ImageDecorator from '../ImageDecorator';
import Logo from '../Logo';
import HamburgerMenu from '../HamburgerMenu';

function Header() {
  return (
    <Wrapper>
      <Navigation>
        <Logo />
        <HamburgerMenu>
          <HamburgerButton>
            <HamburgerIcon
              width={18}
              height={15}
              src="/images/icon-hamburger.svg"
              alt="menu button icon"
            />
          </HamburgerButton>
        </HamburgerMenu>
      </Navigation>

      <HeroWrapper>
        <ImageDecorator>
          <HeroImage
            src="/images/illustration-hero.svg"
            width={657}
            height={466}
            priority={true}
            alt="An illustration of the bookmark tool on a desktop device"
          />
        </ImageDecorator>

        <HeroContent>
          <Heading> A Simple Bookmark Manager</Heading>
          <Paragraph>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </Paragraph>

          <ButtonsWrapper>
            <Button>Get it in Chrome</Button>

            <Button variant="secondary">Get it in Firefox</Button>
          </ButtonsWrapper>
        </HeroContent>
      </HeroWrapper>
    </Wrapper>
  );
}

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

const HeroImageWrapper = styled.div`
  height: 250px;
  margin: 0 -24px;

  position: relative;
`;

const HeroWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 68px;
  padding: 24px;
  margin: 64px -24px 0px -24px;
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
  color: ${COLORS.VeryDarkBlue};
`;

const HamburgerIcon = styled(Image)`
  pointer-events: none;
`;

const Wrapper = styled.header`
  padding: 24px;

  max-width: 1000px;
  margin: 0 auto;

  margin-bottom: 68px;

  overflow: hidden;
`;

const HamburgerButton = styled(UnstyledButton)`
  padding: 16px;
  margin: -16px;

  cursor: pointer;
`;

export default Header;
