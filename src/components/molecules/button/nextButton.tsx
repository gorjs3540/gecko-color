import React from 'react';
import styled from 'styled-components';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

interface IProps {
  onClick: () => void;
}

const NextButton: React.FC<IProps> = (props) => {
  const { onClick } = props;

  return (
    <Wrapper onClick={onClick}>
      <ArrowForwardIcon fontSize='large' style={{ color: '#fff' }} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: #000;
  cursor: pointer;
`;

export default NextButton;
