import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import RootLayout from './pages/Root';
import Error from './pages/Error';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import AnimatedCursor from 'react-animated-cursor';
import { ThemeProvider } from './context/ThemeContext';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AnimatedCursor
        innerSize={18}
        outerSize={12}
        color="127, 153, 206"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={3}
      />
      <BrowserRouter>
        <RoutesComponent />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
