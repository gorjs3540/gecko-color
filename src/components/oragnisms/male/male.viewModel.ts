import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function MaleViewModel() {
  const navigate = useNavigate();
  const [selectecdGecko, setSelectedMaleGecko] = useState<string>('');

  function selectGecko(label: string) {
    setSelectedMaleGecko(label);
    sessionStorage.setItem('male', label);
  }

  function reset() {
    setSelectedMaleGecko('');
  }

  function next() {
    if (selectecdGecko === '') return alert('Please select a type');
    sessionStorage.setItem('male', selectecdGecko);
    navigate('/female');
  }

  return {
    selectecdGecko,
    selectGecko,
    reset,
    next,
  };
}