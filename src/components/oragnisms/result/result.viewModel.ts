import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import chromosomeCalculator, { chromosomeObj } from '../../../utils/calculator';

export function MaleViewModel() {
  const navigate = useNavigate();
  const [selectedChromosome, setSelectedChromosome] = useState<string[]>([]);
  const [male, setMale] = useState<string>('');
  const [female, setFemale] = useState<string>('');

  useEffect(() => {
    const male = sessionStorage.getItem('male');
    const female = sessionStorage.getItem('female');
    if (male !== null && female !== null) {
      setMale(male);
      setFemale(female);
    }
  }, []);

  function selectChromosome(label: string) {
    if (selectedChromosome.length === 2) {
      setSelectedChromosome((state) => {
        state.shift();
        state.push(label);
        return state;
      });
    } else {
      setSelectedChromosome((state) => {
        state.push(label);
        return state;
      });
    }
  }

  function getAllChromosome() {
    return [...chromosomeObj[male], ...chromosomeObj[female]];
  }

  function resultChromosome() {
    return chromosomeCalculator(male, female);
  }

  function backToFirsetPage() {
    sessionStorage.clear();
    navigate('/male');
  }

  return {
    getAllChromosome,
    selectChromosome,
    resultChromosome,
    male,
    female,
    backToFirsetPage,
  };
}
