'use client';
import { COLORS } from '@/lib/constants';
import styled from 'styled-components';

function Paragraph({ children }) {
  return <ParagraphStyled>{children}</ParagraphStyled>;
}

const ParagraphStyled = styled.p`
  color: ${COLORS.GrayishBlue};
  max-width: 500px;
  align-self: center;
`;

export default Paragraph;
