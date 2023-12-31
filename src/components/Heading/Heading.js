'use client';
import { COLORS } from '@/lib/constants';
import styled from 'styled-components';

const SIZES = {
  1: 38,
  2: 24,
  3: 20,
};

function Heading({
  children,
  level = 1,
  color = `${COLORS.VeryDarkBlue}`,
  style,
}) {
  return (
    <HeadingStyled
      as={`h${level}`}
      style={{
        '--font-size': `${SIZES[level] / 16}rem`,
        '--color': color,
      }}
    >
      {children}
    </HeadingStyled>
  );
}

const HeadingStyled = styled.h1`
  font-size: var(--font-size);
  font-weight: 600;
  line-height: 1.1;
  color: var(--color);
`;

export default Heading;
