import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { useStaticRoutes } from "./hooks/useStaticRoutes";

const App: React.FC = () => {
  const routes = useStaticRoutes();

  return (
    <Router>
      <Layout>
        <Routes>
          {routes.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
