import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import RootLayout from './pages/Root';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
// import ReactGA from 'react-ga4';

// const GA_MEASUREMENT_ID = import.meta.env.VITE_REACT_APP_GA_MEASUREMENT_ID;
// ReactGA.initialize(GA_MEASUREMENT_ID);

const RoutesComponent = () => {
  // const location = useLocation();

  // useEffect(() => {
  //   ReactGA.send({
  //     hitType: 'pageview',
  //     page_path: location.pathname + location.search,
  //   });
  // }, [location]);

  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="projects" element={<ProjectsPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <RoutesComponent />
    </Router>
  );
};

export default App;
