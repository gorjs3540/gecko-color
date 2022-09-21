import React from 'react';
import styled from 'styled-components';

interface IProps {
  onClick: () => void;
}

const StartButton: React.FC<IProps> = (props) => {
  const { onClick } = props;

  return (
    <Wrapper onClick={onClick}>
      <h4>FIND YOUR GECKO</h4>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36rem;
  height: 6.8rem;
  border: 0.4rem solid #000;
  border-radius: 1.6rem;
  cursor: pointer;

  :hover {
    color: #fff;
    background: #000;
    cursor: pointer;
  }
`;

export default StartButton;
