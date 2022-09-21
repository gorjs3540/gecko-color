import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function FemaleViewModel() {
  const navigate = useNavigate();
  const [selectecdGecko, setSelectedMaleGecko] = useState<string>('');

  function selectGecko(label: string) {
    setSelectedMaleGecko(label);
    sessionStorage.setItem('male', label);
  }

  function backToMalePage() {
    navigate(-1);
  }

  function reset() {
    setSelectedMaleGecko('');
  }

  function next() {
    if (selectecdGecko === '') return alert('Please select a type');
    sessionStorage.setItem('female', selectecdGecko);
    navigate('/result');
  }

  return {
    selectecdGecko,
    selectGecko,
    backToMalePage,
    reset,
    next,
  };
}
