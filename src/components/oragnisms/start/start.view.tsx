import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import StartButton from '../../molecules/button/startButton';

const MaleView: React.FC = () => {
  const navigate = useNavigate();

  function start() {
    navigate('/male');
  }

  return (
    <Wrapper>
      <StartButton onClick={start} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export default MaleView;
