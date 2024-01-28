import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import Intro from './components/Intro/Intro';
import LandPage from './components/LandingPage/LandPage';
import AboutPage from './components/AboutPage/AboutPage';
import SkillsPage from './components/SkillsPage/SkillsPage';
import ProjectPage from './components/ProjectPage/ProjectPage';
import Career from './components/Career/Career';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import NotFound from './components/Notfound404/NotFound';

function App() {
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    // Check if intro has already been seen in localStorage
    const hasSeenIntro = localStorage.getItem('hasSeenIntro');

    if (hasSeenIntro) {
      setIntroComplete(true);
    } else {
      // Simulate an asynchronous operation (e.g., an intro animation) being completed
      setTimeout(() => {
        setIntroComplete(true);
        // Save in localStorage that the intro has been seen
        localStorage.setItem('hasSeenIntro', 'true');
      }, 6000); // Adjust the timeout as needed
    }
  }, []);

  return (
    <div>
      <ThemeProvider>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {introComplete ? (
                  <>
                    <LandPage />
                    <AboutPage />
                    <Career />
                    <SkillsPage />
                    <ProjectPage />
                    <Contact />
                    <Footer />
                  </>
                ) : (
                  <Intro />
                )}
              </>
            }
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
