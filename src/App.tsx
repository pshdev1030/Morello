import React from 'react';
import { GlobalStyles } from 'Component/GlobalStyle';
import { Global } from '@emotion/react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'Pages/Home';
import Board from 'Pages/Board';
import NotFound from 'Pages/NotFound';
import ErrorPage from 'Pages/Error';
import Login from 'Pages/LogIn';

const App = () => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/boards" component={Board} />
          <Route exact path="/Error" component={ErrorPage} />
          <Route exact path="/Login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
