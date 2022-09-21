import React from 'react';
import styled from 'styled-components';

import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';

interface IProps {
  onClickBack: () => void;
}

const SelectedMaleCard: React.FC<IProps> = (props) => {
  const { onClickBack } = props;

  const selectedMale = sessionStorage.getItem('male');

  return (
    <Wrapper>
      <IconWrapper>
        <ArrowBackIcon
          fontSize='large'
          color='action'
          onClick={onClickBack}
          style={{ cursor: 'pointer' }}
        />
      </IconWrapper>
      <TextWrapper>
        <Title>Selected Male</Title>
        <SelectedMaleText>{selectedMale}</SelectedMaleText>
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  align-items: center;
  display: flex;
  width: 26rem;
  height: 6rem;
  border-radius: 1.6rem;
  box-shadow: 0rem 0.3rem 0.6rem rgba(0, 0, 0, 0.1),
    0rem 0.4rem 0.8rem rgba(0, 0, 0, 0.08),
    0rem 0.1rem 1.2rem rgba(0, 0, 0, 0.04);
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 1.2rem;
  color: #666666;
`;

const SelectedMaleText = styled.h6``;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
`;

export default SelectedMaleCard;
