import React from 'react';
import styled from 'styled-components';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

interface IProps {
  label: string;
  onClick: (label: string) => void;
}

const ChromosomeSelectCard: React.FC<IProps> = (props) => {
  const { label, onClick } = props;

  const selectedMale = sessionStorage.getItem('male');

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
  width: 8rem;
  height: 4.8rem;
  border-radius: 1.6rem;
  box-shadow: 0rem 0.3rem 0.6rem rgba(0, 0, 0, 0.1),
    0rem 0.4rem 0.8rem rgba(0, 0, 0, 0.08),
    0rem 0.1rem 1.2rem rgba(0, 0, 0, 0.04);
  cursor: pointer;
`;

const Label = styled.h6``;

export default ChromosomeSelectCard;
