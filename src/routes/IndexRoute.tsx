import React from 'react';
import { Route, Routes, Router } from 'react-router-dom';
import IndexPage from 'pages/index/IndexPage';
import ManageCodePage from 'pages/admin/ManageCodePage';
import ManageMemberPage from 'pages/admin/ManageMemberPage';
import MyDashPage from "pages/atdc/MyDashPage";
import TeamDashPage from "pages/atdc/TeamDashPage";

const IndexRoute = () => {
  return (
    <Routes>
        <Route path={'/'} element={<IndexPage/>}/>
        <Route path={'/admin/code'} element={<ManageCodePage/>}/>
        <Route path={'/admin/member'} element={<ManageMemberPage/>}/>
        <Route path={'/atdc/my'} element={<MyDashPage/>}/>
        <Route path={'/atdc/team'} element={<TeamDashPage/>}/>
    </Routes>
  );
};

export default IndexRoute;
