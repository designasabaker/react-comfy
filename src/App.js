import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import {
    Home,
    Products,
    SingleProduct,
    Cart,
    Checkout,
    Error,
    About,
    PrivateRoute,
    AuthWrapper
} from './pages'

import { Navbar, Sidebar } from './components'

function App() {
  return (
      <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/about'>
                <About />
            </Route>
            <Route exact path='/cart'>
                <Cart />
            </Route>
            <Route exact path='/products'>
                <Products />
            </Route>
            <Route exact path='/products/:id' children={<SingleProduct />} />
            <PrivateRoute exact path='/checkout'>
                <Checkout />
            </PrivateRoute>
            <Route path='*'>
                <Error />
            </Route>
        </Switch>
      </Router>
      </AuthWrapper>
  )
}

export default App
