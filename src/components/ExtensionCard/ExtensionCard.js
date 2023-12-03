'use client';
import Image from 'next/image';
import styled from 'styled-components';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Button from '../Button';
import { COLORS } from '@/lib/constants';
import Stack from '../Stack';

function ExtensionCard({ title, subtite, logoSrc }) {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo src={logoSrc} width={102} height={100} alt="Google chrome log" />
      </LogoWrapper>
      <Stack>
        <Heading level={3}>{title}</Heading>
        <Paragraph>{subtite}</Paragraph>
      </Stack>

      <DotsWrapper>
        <Dots
          src="/images/bg-dots.svg"
          width={280}
          height={4}
          alt="decorative dots"
        />
      </DotsWrapper>
      <Button>Add & Install Extension</Button>
    </Wrapper>
  );
}

const DotsWrapper = styled.div`
  margin: 0 -24px;
`;

const Dots = styled(Image)`
  width: 100%;
  height: auto;
`;

const Logo = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LogoWrapper = styled.div`
  width: 100px;
  align-self: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  border-radius: 10px;

  padding: 24px;
  padding-top: 48px;

  margin-top: 24px;

  box-shadow: 0px 5px 15px ${COLORS.Shadow};

  &:nth-of-type(2) {
    margin-top: 68px;
  }

  &:nth-of-type(3) {
    margin-top: 108px;
  }
`;

export default ExtensionCard;
