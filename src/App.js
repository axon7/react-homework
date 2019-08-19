import React from "react";
import Layout from "./hoc/Layout";
import Gallery from "./containers/Gallery";
import Profile from "./containers/Profile";

function App() {
  return (
    <div className='App'>
      <Layout>
        <Gallery />
        <Profile />
      </Layout>
    </div>
  );
}

export default App;
