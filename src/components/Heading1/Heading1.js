'use client';
import styled from 'styled-components';
import { COLORS, QUERIES } from '@/lib/constants';

function Heading1({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.h1`
  font-weight: 600;
  font-size: ${32 / 16}rem;
  color: ${COLORS.VeryDarkBlue};

  @media ${QUERIES.phoneAndLarger} {
    font-size: ${38 / 16}rem;
    line-height: 1.1;
  }
`;

export default Heading1;
