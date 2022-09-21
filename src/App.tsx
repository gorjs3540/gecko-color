import React, { createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MalePage from './pages/male';
import FemalePage from './pages/female';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/male' element={<MalePage />} />
        <Route path='/female' element={<FemalePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
