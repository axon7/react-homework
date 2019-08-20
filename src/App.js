import React from "react";
import Layout from "./hoc/Layout";
import Gallery from "./containers/Gallery";
import Profile from "./containers/Profile";
import { Switch, Route, Redirect } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  * {
  box-sizing: border-box;
  }
`;
function App() {
  return (
    <div className='App'>
      <GlobalStyles />
      <Layout>
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/gallery' />} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
