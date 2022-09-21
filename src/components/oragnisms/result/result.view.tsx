import React from 'react';
import styled from 'styled-components';

import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';

import ResultCard from '../../molecules/card/resultCard';

import { MaleViewModel } from './result.viewModel';

const MaleView: React.FC = () => {
  const { selectChromosome, resultChromosome, male, female, backToFirsetPage } =
    MaleViewModel();

  if (male === '' || female === '') {
    return (
      <Wrapper>
        <BackButtonWrapper onClick={backToFirsetPage}>
          <ArrowBackIcon fontSize='large' color='inherit' />
          <h6>Back to first page</h6>
        </BackButtonWrapper>
        <TitleWrapper>
          <Title>Result Your Gecko</Title>
          <SubTitle>
            When you click a tag, only objects that contain that tag are
            displayed.
          </SubTitle>
          <GuildText>
            This is a family table about Lily White & Cappuccino.
          </GuildText>
        </TitleWrapper>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <BackButtonWrapper onClick={backToFirsetPage}>
        <ArrowBackIcon fontSize='large' color='inherit' />
        <h6>Back to first page</h6>
      </BackButtonWrapper>
      <TitleWrapper>
        <Title>Result Your Gecko</Title>
        <SubTitle>
          When you click a tag, only objects that contain that tag are
          displayed.
        </SubTitle>
        <GuildText>
          This is a family table about Lily White & Cappuccino.
        </GuildText>
      </TitleWrapper>
      <ResultWrapper>
        {resultChromosome().map((item) => {
          return (
            <ResultCard key={item} label={item} onClick={selectChromosome} />
          );
        })}
      </ResultWrapper>
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
  margin-bottom: 6rem;
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
  gap: 4rem;
  margin-bottom: 6rem;
`;

const ResultWrapper = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: 22rem 22rem 22rem;
  grid-template-rows: 20rem 20rem 20rem;
  place-items: center;
`;

const BackButtonWrapper = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
`;

export default MaleView;
