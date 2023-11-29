'use client';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import UnstyledButton from '../UnstyledButton';

import Heading from '@/components/Heading';
import Paragraph from '@/components/Paragraph';
import Button from '@/components/Button';
import { COLORS, QUERIES } from '@/lib/constants';

import ImageDecorator from '../ImageDecorator';
import Logo from '../Logo';
import HamburgerMenu from '../HamburgerMenu';
import Heading1 from '../Heading1';

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

        <DesktopNavWrapper>
          <DestktopNav>
            <li>
              <DesktopNavLink href="/">Features</DesktopNavLink>
            </li>
            <li>
              <DesktopNavLink href="/">Pricing</DesktopNavLink>
            </li>
            <li>
              <DesktopNavLink href="/">Contact</DesktopNavLink>
            </li>
          </DestktopNav>
          <Button variant="tertiary">Login</Button>
        </DesktopNavWrapper>
      </Navigation>

      <HeroWrapper>
        <HeroImageWrapper>
          <Blob />
          <HeroImage
            src="/images/illustration-hero.svg"
            width={657}
            height={466}
            priority={true}
            alt="An illustration of the bookmark tool on a desktop device"
          />
        </HeroImageWrapper>

        <HeroContent>
          <Heading1> A Simple Bookmark Manager</Heading1>
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

const Blob = styled.div`
  width: 70%;
  height: 70%;
  background: ${COLORS.SoftBlue};

  border-radius: 1000px 0 0 1000px;

  position: absolute;
  right: 0;
  bottom: 0;
`;

const HeroImageWrapper = styled.div`
  position: relative;
  margin: 0 -24px;

  @media ${QUERIES.phoneAndLarger} {
    flex: 1;
    align-self: flex-start;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  max-width: 400px;

  @media ${QUERIES.phoneAndLarger} {
    max-width: 500px;

    text-align: start;
    flex: 1;
    flex-shrink: 1000;
  }
`;

const HeroImage = styled(Image)`
  object-fit: contain;
  width: 100%;
  height: 100%;

  position: relative;
`;

const HeroWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 32px;

  padding: 24px;
  padding-top: 0;

  margin: 64px -24px 0px -24px;

  @media ${QUERIES.phoneAndLarger} {
    flex-direction: row-reverse;
    justify-content: space-between;

    margin: 64px -68px 0px -24px;
    gap: 28px;
  }
`;

const DesktopNavLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  padding: 10px 16px;

  color: ${COLORS.VeryDarkBlue};

  display: block;
`;

const DesktopNavWrapper = styled.div`
  align-items: baseline;
  gap: 10px;
  display: none;
  font-size: 1rem;

  @media ${QUERIES.phoneAndLarger} {
    display: flex;
  }
`;

const DestktopNav = styled.div`
  list-style: none;
  display: flex;

  align-items: baseline;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;

  @media ${QUERIES.phoneAndLarger} {
    justify-content: revert;
  }
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${COLORS.VeryDarkBlue};

  align-items: center;
`;

const HamburgerIcon = styled(Image)`
  pointer-events: none;
`;

const Wrapper = styled.header`
  padding: 24px;

  max-width: 1144px;
  margin: 0 auto;

  margin-bottom: 68px;
`;

const HamburgerButton = styled(UnstyledButton)`
  padding: 16px;
  margin: -16px;

  cursor: pointer;

  @media ${QUERIES.phoneAndLarger} {
    display: none;
  }
`;

export default Header;
