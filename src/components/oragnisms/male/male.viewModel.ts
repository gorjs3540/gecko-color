import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function MaleViewModel() {
  const navigate = useNavigate();
  const [selectecdGecko, setSelectedMaleGecko] = useState<string>('');

  useEffect(() => {
    const male = sessionStorage.getItem('male');
    if (male !== null) setSelectedMaleGecko(male);
  }, []);

  function selectGecko(label: string) {
    setSelectedMaleGecko(label);
    sessionStorage.setItem('male', label);
  }

  function reset() {
    setSelectedMaleGecko('');
    sessionStorage.setItem('male', '');
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
