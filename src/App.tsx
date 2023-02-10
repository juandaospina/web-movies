// import { useState } from "react";
import { useEffect, useState } from "react";

import { Outlet } from "react-router-dom";

import { Layout } from "./containers/Layout";

function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
