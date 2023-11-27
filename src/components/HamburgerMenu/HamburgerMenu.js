'use client';
import Image from 'next/image';
import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

import { COLORS } from '@/lib/constants';

import Logo from '../Logo';
import Link from 'next/link';
import UnstyledButton from '../UnstyledButton';

function HamburgerMenu({ children }) {
  return (
    <Dialog.Root>
      <Trigger asChild>{children}</Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Content>
          <Header>
            <Logo
              circleColor={COLORS.White}
              logoColor="hsl(229, 31%, 21%, 0.9)"
            />
            <Dialog.Close asChild>
              <CloseButton aria-label="close">
                <Image
                  src="/images/icon-close.svg"
                  width={20}
                  height={20}
                  alt="close menu icon"
                />
              </CloseButton>
            </Dialog.Close>
          </Header>

          <NavLinks>
            <NavLinkItem>
              <NavLink href="/">Features</NavLink>
            </NavLinkItem>
            <NavLinkItem>
              <NavLink href="/">Pricing</NavLink>
            </NavLinkItem>
            <NavLinkItem>
              <NavLink href="/">Contact</NavLink>
            </NavLinkItem>
          </NavLinks>

          <Button>Login</Button>

          <SocialIcons>
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
                  alt="Twitter logo"
                />
              </Link>
            </li>
          </SocialIcons>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

const CloseButton = styled(UnstyledButton)`
  padding: 16px;
  margin: -16px;
`;

const Button = styled.button`
  padding: 18px 0;
  background: transparent;
  border: 2px solid ${COLORS.White};
  border-radius: 5px;

  color: ${COLORS.White};
  font-weight: 500;
  text-transform: inherit;

  outline-offset: 5px;
`;

const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
`;

const NavLinkItem = styled.li`
  border-bottom: 1px solid ${COLORS.DarkGrayishBlue};

  text-align: center;

  &:first-child {
    border-top: 1px solid ${COLORS.DarkGrayishBlue};
  }
`;

const NavLink = styled(Link)`
  color: ${COLORS.Offwhite};
  text-decoration: none;

  padding: 18px 0;
  display: block;
`;

const Trigger = styled(Dialog.Trigger)`
  &[data-state='open'] {
    display: none;
  }
`;

const SocialIcons = styled.ul`
  display: flex;
  gap: 24px;
  margin-top: auto;

  align-self: center;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Content = styled(Dialog.Content)`
  position: fixed;
  inset: 0;
  background-color: hsl(229, 31%, 21%, 0.9);

  display: flex;
  flex-direction: column;
  gap: 32px;

  color: ${COLORS.White};
  font-size: ${18 / 16}rem;
  text-transform: uppercase;

  padding: 24px;
`;

export default HamburgerMenu;
