import React from 'react';
import styled from 'styled-components';

import FemaleView from '../../components/oragnisms/female/female.view';

const FemalePage: React.FC = () => {
  return (
    <Wrapper>
      <FemaleView />
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

export default FemalePage;
