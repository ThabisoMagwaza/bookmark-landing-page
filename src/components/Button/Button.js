'use client';
import { COLORS } from '@/lib/constants';
import styled from 'styled-components';

const VARIANTS = {
  primary: {
    '--background': COLORS.SoftBlue,
    '--text-color': COLORS.White,
    '--shadow': 'none',
    '--hover-color': COLORS.SoftBlue,
    '--hover-background': COLORS.White,
  },
  secondary: {
    '--background': COLORS.Offwhite,
    '--text-color': COLORS.DarkGrayishBlue,
    '--shadow': `0px 5px 20px ${COLORS.Shadow}`,
    '--hover-color': COLORS.DarkGrayishBlue,
    '--hover-background': COLORS.White,
  },
  tertiary: {
    '--background': COLORS.SoftRed,
    '--text-color': COLORS.White,
    '--shadow': 'none',
    '--hover-color': COLORS.SoftRed,
    '--hover-background': COLORS.White,
  },
};

function Button({ children, variant = 'primary', ...delegated }) {
  return (
    <ButtonStyled style={VARIANTS[variant]} {...delegated}>
      {children}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  border: none;
  background: var(--background);
  padding: 10px 16px;
  border-radius: 5px;
  color: var(--text-color);

  box-shadow: var(--shadow);
  border: 1px solid var(--background);

  font-size: 16px;
  font-weight: 700;

  outline-offset: 3px;

  cursor: pointer;

  &:hover {
    background: var(--hover-background);
    color: var(--hover-color);
    border: 1px solid var(--hover-color);
    box-shadow: none;
  }
`;

export default Button;
