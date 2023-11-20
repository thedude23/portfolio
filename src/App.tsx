import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Root from './pages/Root';
import Error from './pages/Error';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
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
        innerSize={18}
        outerSize={12}
        color="161, 55, 227"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={3}
      />
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
        </Route>
        <Route path="*" element={<Error />} />
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
