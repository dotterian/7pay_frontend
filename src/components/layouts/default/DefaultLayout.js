/* @flow */

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../../header/header';
import Footer from '../../footer/footer';

const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <div className="app">
          <Header {...matchProps} />
          <Component {...matchProps} />
          <Footer />
        </div>
      )}
    />
  );
};

export default DefaultLayout;
