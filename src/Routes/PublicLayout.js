import React from 'react'
import { Route } from 'react-router-dom'
import Header from './../Components/Header'

const Layout = ({ children, ...rest }) => {
  return (
    <div>
      <Header/>
      {children}
    </div>
  )
}

/*
  Route wrapper
 */

const PublicLayout = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={matchProps => (
      <Layout>
        <Component {...matchProps} />
      </Layout>
    )} />
  )
};

export default PublicLayout