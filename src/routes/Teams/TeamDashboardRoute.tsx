import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import TeamDashboard from '../../features/team/components/TeamDashboard';

const TeamDashboardRoute = () => {
  return (
    <BrowserRouter>
      <Route path={'/dashboard'} element={<TeamDashboard />} />
    </BrowserRouter>
  );
};

export default TeamDashboardRoute;
