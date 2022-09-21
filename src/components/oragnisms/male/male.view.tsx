import React from 'react';
import styled from 'styled-components';
import TextTransition, { presets } from 'react-text-transition';

import SelectCard from '../../molecules/card/selectCard';
import ResetButton from '../../molecules/button/resetButton';
import NextButton from '../../molecules/button/nextButton';

import { MaleViewModel } from './male.viewModel';

const MaleView: React.FC = () => {
  const { selectecdGecko, selectGecko, reset, next } = MaleViewModel();

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Male Gecko</Title>
        <SubTitle>Select your male gecko.</SubTitle>
        <GuildText>You are currently selecting male...</GuildText>
      </TitleWrapper>
      <CardWrapper>
        <SelectCard label='Lily White' onClick={selectGecko} />
        <SelectCard label='Cappuccino' onClick={selectGecko} />
        <SelectCard label='Axanthic' onClick={selectGecko} />
      </CardWrapper>
      <ButtonWrapper>
        <ResetButton onClick={reset} />
        <SelectedGeckoText>
          <TextTransition springConfig={presets.gentle}>
            <h4 style={{ width: '20rem', margin: '0 auto' }}>
              {selectecdGecko}
            </h4>
          </TextTransition>
        </SelectedGeckoText>
        <NextButton onClick={next} />
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 12rem);
  padding: 6rem 0;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10rem;
`;

const Title = styled.h2`
  color: #263238;
  margin-bottom: 0.4rem;
`;

const SubTitle = styled.h6`
  color: #999999;
  margin-bottom: 4rem;
`;

const GuildText = styled.p`
  color: #333333;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8rem;
  margin-bottom: 12rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
`;

const SelectedGeckoText = styled.div`
  text-align: center;
  width: 20rem;
  border-bottom: 0.2rem solid #999999;
`;

export default MaleView;
