import React, { createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MalePage from './pages/male';
import FemalePage from './pages/female';
import ResultPage from './pages/result';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/male' element={<MalePage />} />
        <Route path='/female' element={<FemalePage />} />
        <Route path='/result' element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
