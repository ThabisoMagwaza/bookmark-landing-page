'use client';
import styled from 'styled-components';
import Image from 'next/image';

import UnstyledButton from '../UnstyledButton';

function Header() {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}

const Logo = styled(Image)``;

const HamburgerIcon = styled(Image)`
  pointer-events: none;
`;

const Wrapper = styled.header`
  padding: 24px;
  display: flex;
  justify-content: space-between;

  max-width: 1000px;
  margin: 0 auto;
`;

const HamburgerButton = styled(UnstyledButton)`
  padding: 16px;
  margin: -16px;

  cursor: pointer;
`;

export default Header;
