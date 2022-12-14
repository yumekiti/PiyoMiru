import { FC, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import BusPage from './pages/BusPage';
import ListPage from './pages/ListPage';
import UsagePage from './pages/Register/UsagePage';
import HomePage from './pages/HomePage';
import LP from './pages/Register/LP';
import RegisterPage from './pages/RegisterPage';
import GroupPage from './pages/GroupPage';
import SettingsPage from './pages/SettingsPage';

const Router: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/usage' element={<UsagePage />} />
      <Route path='/bus/:id' element={<BusPage />} />
      <Route path='/list' element={<ListPage />} />
      <Route path='/lp' element={<LP />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/group' element={<GroupPage />} />
      <Route path='/settings' element={<SettingsPage />} />
    </Routes>
  );
};

export default Router;
