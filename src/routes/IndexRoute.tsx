import React from 'react';
import { Route, Routes, Router } from 'react-router-dom';
import IndexPage from 'pages/index/IndexPage';
import ManageCodePage from 'pages/admin/ManageCodePage';
import ManageMemberPage from 'pages/admin/ManageMemberPage';

const IndexRoute = () => {
  return (
    <Routes>
        <Route path={'/'} element={<IndexPage/>}/>
        <Route path={'/admin/code'} element={<ManageCodePage/>}/>
        <Route path={'/admin/member'} element={<ManageMemberPage/>}/>
    </Routes>
  );
};

export default IndexRoute;
