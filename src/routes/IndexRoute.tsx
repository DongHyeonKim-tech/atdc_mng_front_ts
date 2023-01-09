import React from 'react';
import { Route, Routes, Router } from 'react-router-dom';
import IndexPage from 'pages/index/IndexPage';
import ManageCodePage from 'pages/admin/ManageCodePage';
import ManageMemberPage from 'pages/admin/ManageMemberPage';
import Login from '../features/account/Login';
import TeamDashboardRoute from './Teams/TeamDashboardRoute';
import TeamDashboard from '../features/team/components/TeamDashboard';

const IndexRoute = () => {
  return (
    <Routes>
      <Route path={'/'} element={<IndexPage />} />
      <Route path={'/account/login'} element={<Login />} />
      <Route path={'/admin/code'} element={<ManageCodePage />} />
      <Route path={'/admin/member'} element={<ManageMemberPage />} />
      <Route path={'/team/dashboard'} element={<TeamDashboard />} />
    </Routes>
  );
};

export default IndexRoute;
