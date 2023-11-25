'use client';
import styled from 'styled-components';

function Stack({ children, gap = 10, direction = 'column' }) {
  return (
    <Wrapper
      style={{
        '--direction': direction,
        '--gap': gap,
      }}
    >
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: var(--direction);
  gap: var(--gap);
`;

export default Stack;
