import React from 'react';
import styled from 'styled-components';

import RefreshIcon from '@material-ui/icons/Refresh';

interface IProps {
  onClick: () => void;
}

const SelectCard: React.FC<IProps> = (props) => {
  const { onClick } = props;

  return (
    <Wrapper onClick={onClick}>
      <RefreshIcon fontSize='large' color='action' />
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
  background: #cccccc;
  cursor: pointer;
`;

export default SelectCard;
