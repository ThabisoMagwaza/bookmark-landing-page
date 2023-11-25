'use client';
import styled from 'styled-components';

function Section({ children, ...delegated }) {
  return <Wrapper {...delegated}>{children}</Wrapper>;
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 24px;
  margin-bottom: 68px;

  text-align: center;
`;

export default Section;
