import React from 'react';
import styled from 'styled-components';

import ResultView from '../../components/oragnisms/result/result.view';

const ResultPage: React.FC = () => {
  return (
    <Wrapper>
      <ResultView />
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

export default ResultPage;
