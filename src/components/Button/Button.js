'use client';
import { COLORS } from '@/lib/constants';
import styled from 'styled-components';

const VARIANTS = {
  primary: {
    '--background': COLORS.SoftBlue,
    '--text-color': COLORS.White,
    '--shadow': 'none',
  },
  secondary: {
    '--background': COLORS.Offwhite,
    '--text-color': COLORS.DarkGrayishBlue,
    '--shadow': `0px 5px 20px ${COLORS.Shadow}`,
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

  font-size: 16px;
  font-weight: 700;

  outline-offset: 3px;
`;

export default Button;
