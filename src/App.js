import React from "react";
import Layout from "./hoc/Layout";
import Gallery from "./containers/Gallery";
import Profile from "./containers/Profile";
import { Switch, Route, Redirect } from "react-router-dom";
function App() {
  return (
    <div className='App'>
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
