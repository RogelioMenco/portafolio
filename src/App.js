import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import './css/App.css';
import UseScrollToTop from './hooks/useScrollToTop';

import { SingleProjectProvider } from './context/SingleProjectContext';

const About = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectSingle = lazy(() => import('./pages/ProjectSingle.jsx'));

function App() {
  return (
    <SingleProjectProvider>
      <AnimatePresence>
        <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
          <Router>
            <ScrollToTop />
            <AppHeader />
            <Suspense fallback={''}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="proyectos" element={<Projects />} />
                <Route path="proyectos/single" element={<ProjectSingle />} />

                <Route path="acerca" element={<About />} />
                <Route path="contactame" element={<Contact />} />
              </Routes>
            </Suspense>
            <AppFooter />
          </Router>
          <UseScrollToTop />
        </div>
      </AnimatePresence>
    </SingleProjectProvider>
  );
}

export default App;
