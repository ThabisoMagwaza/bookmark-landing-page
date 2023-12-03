'use client';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Logo from '../Logo';
import { COLORS, QUERIES } from '@/lib/constants';

function Footer() {
  return (
    <Wrapper>
      <MaxWidthWrapper>
        <Logo />
        <NavLinks>
          <li>
            <NavLink href="/">Features</NavLink>
          </li>
          <li>
            <NavLink href="/">Pricing</NavLink>
          </li>
          <li>
            <NavLink href="/">Contact</NavLink>
          </li>
        </NavLinks>

        <SocialLinks>
          <li>
            <Link href="/">
              <Image
                src="/images/icon-facebook.svg"
                width={24}
                height={24}
                alt="Facebook logo"
              />
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image
                src="/images/icon-twitter.svg"
                width={24}
                height={20}
                alt="Twitter log"
              />
            </Link>
          </li>
        </SocialLinks>
      </MaxWidthWrapper>
    </Wrapper>
  );
}

const MaxWidthWrapper = styled.div`
  max-width: 1144px;
  width: 100%;
  margin: 0 auto;
  padding: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;

  @media ${QUERIES.phoneAndLarger} {
    flex-direction: row;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.White};
  text-transform: uppercase;
`;

const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  list-style: none;
  text-align: center;

  @media ${QUERIES.phoneAndLarger} {
    margin-right: auto;
    flex-direction: row;
  }
`;

const SocialLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 32px;
`;

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 48px;

  background: ${COLORS.VeryDarkBlue};
  color: ${COLORS.White};

  padding: 24px;

  @media ${QUERIES.phoneAndLarger} {
    flex-direction: row;
  }
`;

export default Footer;
