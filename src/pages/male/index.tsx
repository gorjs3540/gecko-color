import React from 'react';
import styled from 'styled-components';

import MaleView from '../../components/oragnisms/male/male.view';

const MalePage: React.FC = () => {
  return (
    <Wrapper>
      <MaleView />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export default MalePage;
