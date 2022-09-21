import React from 'react';
import styled from 'styled-components';

interface IProps {
  label: string;
  onClick: (label: string) => void;
}

const SelectCard: React.FC<IProps> = (props) => {
  const { label, onClick } = props;

  function onClickCard() {
    onClick(label);
  }

  return (
    <Wrapper onClick={onClickCard}>
      <Label>{label}</Label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30rem;
  height: 36rem;
  border-radius: 1.6rem;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08),
    0px 1px 12px rgba(0, 0, 0, 0.04);
  cursor: pointer;
`;

const Label = styled.h4``;

export default SelectCard;
