import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
// import "App.less";
import 'features/common/layout/styles/common.css';
import IndexRoute from 'routes/IndexRoute';
import { BrowserRouter } from "react-router-dom"

function App( history: any ) {
  return (
      // <ConnectedRouter history={history}>
          <BrowserRouter>
              <IndexRoute />
          </BrowserRouter>


      // </ConnectedRouter>
  );
}
export default App;
