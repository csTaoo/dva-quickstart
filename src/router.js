import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Example from './components/Example';
import Users from './components/Users/Users';
import WrappedNormalLoginForm from './components/Login';
import Layout from './components/LeftRightLayout';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Layout>
        <Route path="/"  exact component={WrappedNormalLoginForm} />
        <Route path="/login"  component={Example}/>
        <Route path="/users"   component={Users} />
        <Route path="/layout"   component={Layout} />
      </Layout>
    </Router>
  );
}

export default RouterConfig;
