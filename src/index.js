/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import { Provider } from 'react-redux';
import DefaultLayout from './components/layouts/default/DefaultLayout';
import IndexPage from './components/IndexPage';
import { FaqPage, ApiPage, ContactsPage } from './components/StaticPages';
import Error from './components/Error';
//import store from './redux/store';
import './index.css';

const root = document.getElementById('root');

const Application = () => (
  //<Provider store={store}>
  <Router>
    <div>
      <Switch>
        <DefaultLayout exact path="/" component={IndexPage} />
        <DefaultLayout exact path="/page/faq" component={FaqPage} />
        <DefaultLayout exact path="/page/api" component={ApiPage} />
        <DefaultLayout exact path="/page/contacts" components={ContactsPage} />
        <DefaultLayout
          path="*"
          exact
          component={() => {
            return <Error code="404" text="Page not found" />;
          }}
        />
      </Switch>
    </div>
  </Router>
  //</Provider>
);

if (root) {
  ReactDOM.render(<Application />, root);
}
