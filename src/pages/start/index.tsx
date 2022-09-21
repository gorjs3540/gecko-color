import React from 'react';
import styled from 'styled-components';

import StartView from '../../components/oragnisms/start/start.view';

const StartPage: React.FC = () => {
  return (
    <Wrapper>
      <StartView />
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

export default StartPage;
