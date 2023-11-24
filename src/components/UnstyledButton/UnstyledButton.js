'use client';
import styled from 'styled-components';

function UnstyledButton({ children, ...delegated }) {
  return <Buttton {...delegated}>{children}</Buttton>;
}

const Buttton = styled.button`
  border: none;
  padding: 0;
  margin: 0;
  background-color: transparent;

  &:focus {
    outline-offset: 3px;
  }
`;

export default UnstyledButton;
