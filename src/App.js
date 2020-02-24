import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//page
import Home from './views/Home'
const Index = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
      </Switch>
    </BrowserRouter>
  );
}

export default Index;
