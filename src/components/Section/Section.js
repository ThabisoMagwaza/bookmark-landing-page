'use client';
import styled from 'styled-components';

function Section({ children, ...delegated }) {
  return <Wrapper {...delegated}>{children}</Wrapper>;
}

const Wrapper = styled.section`
  padding: 24px;
  margin-bottom: 68px;

  text-align: center;
`;

export default Section;
