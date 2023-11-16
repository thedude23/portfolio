import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import RootLayout from './pages/Root';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import AnimatedCursor from 'react-animated-cursor';
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
    <>
      <AnimatedCursor
        innerSize={12}
        outerSize={12}
        color="161, 55, 227"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={3}
      />
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="projects" element={<ProjectsPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
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
