import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Example from './components/Example';
import Users from './components/Users/Users';
import WrappedNormalLoginForm from './components/Login';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={WrappedNormalLoginForm} />
        <Route path="/example" exact component={Example}/>
        <Route path="/users" component={Users} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
