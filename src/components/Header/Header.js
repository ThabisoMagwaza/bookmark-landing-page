'use client';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import UnstyledButton from '../UnstyledButton';
import Paragraph from '@/components/Paragraph';
import Button from '@/components/Button';
import { COLORS, QUERIES } from '@/lib/constants';

import Logo from '../Logo';
import HamburgerMenu from '../HamburgerMenu';
import Heading1 from '../Heading1';
import MaxWidthWrapper from '../MaxWidthWrapper';

function Header() {
  return (
    <Wrapper>
      <BlobDesktop />
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

const Wrapper = styled.header`
  margin-bottom: 68px;

  position: relative;
  overflow: hidden;
`;

const BlobDesktop = styled.div`
  height: clamp(100px, 45vw, 320px);
  background: ${COLORS.SoftBlue};

  border-radius: 1000px 0 0 1000px;

  position: absolute;
  width: 80%;
  right: 0;
  top: 27%;

  @media ${QUERIES.phoneAndLarger} {
    width: 70%;
  }

  @media ${QUERIES.tableAndLarger} {
    width: 40%;
    height: 320px;
    bottom: 0;
    top: revert;
  }
`;

const HeroWrapper = styled(MaxWidthWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${QUERIES.tableAndLarger} {
    flex-direction: row-reverse;
    align-items: center;
  }
`;

const HeroImageWrapper = styled.div`
  position: relative;
  margin: 0 -24px;
  margin-bottom: 64px;

  max-width: 600px;
  flex-shrink: 10000;

  @media ${QUERIES.tableAndLarger} {
    margin: revert;
    margin-right: -120px;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 28px;

  max-width: 400px;

  @media ${QUERIES.tableAndLarger} {
    max-width: 500px;

    text-align: start;
  }
`;

const HeroImage = styled(Image)`
  object-fit: contain;
  width: 100%;
  height: 100%;

  position: relative;
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

  @media ${QUERIES.tableAndLarger} {
    justify-content: start;
    align-self: flex-start;
  }
`;

const Navigation = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
  color: ${COLORS.VeryDarkBlue};

  align-items: center;
`;

const HamburgerIcon = styled(Image)`
  pointer-events: none;
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
