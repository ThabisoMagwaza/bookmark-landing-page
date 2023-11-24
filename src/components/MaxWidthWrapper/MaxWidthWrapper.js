'use client';
import styled from 'styled-components';

function MaxWidthWrapper({ children, as, ...delegated }) {
  return (
    <Wrapper as={as} {...delegated}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: ${1000 / 16}rem;
  padding: 16px;
  margin: 0 auto;
`;

export default MaxWidthWrapper;
