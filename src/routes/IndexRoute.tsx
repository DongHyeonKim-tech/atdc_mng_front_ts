import React from 'react';
import { Route, Routes, Router } from 'react-router-dom';
import IndexPage from 'pages/index/IndexPage';
import ManageCodePage from 'pages/admin/ManageCodePage';

const IndexRoute = () => {
  return (
    <Routes>
        <Route path={'/'} element={<IndexPage/>}/>
        <Route path={'/admin/code'} element={<ManageCodePage/>}/>
    </Routes>
  );
};

export default IndexRoute;
