'use client';
import styled from 'styled-components';
import { COLORS } from '@/lib/constants';

function ImageDecorator({ children, blobPosition = 'right', blobOffset = 10 }) {
  const Tag = (blobPosition === 'right' && BlobRight) || BlobLeft;

  return (
    <Wrapper>
      <Tag
        style={{
          '--offset': `-${blobOffset}px`,
        }}
      />
      {children}
    </Wrapper>
  );
}

const Blob = styled.div`
  height: 200px;
  width: 120%;

  border-radius: 1000px;
  background: ${COLORS.SoftBlue};

  position: absolute;
  bottom: var(--offset);
`;

const BlobLeft = styled(Blob)`
  left: -40%;
`;

const BlobRight = styled(Blob)`
  right: -40%;
`;

const Wrapper = styled.div`
  height: 250px;
  margin: 0 -24px;

  position: relative;
`;

export default ImageDecorator;
