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
import TextIntro from './components/TextIntro/TextIntro';

function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const [textIntroComplete, setTextIntroComplete] = useState(false);


  useEffect(() => {
    const hasSeenIntro = localStorage.getItem('hasSeenIntro');
    if (hasSeenIntro) {
      setIntroComplete(true);
    } else {
      setTimeout(() => {
        setIntroComplete(true);
        localStorage.setItem('hasSeenIntro', 'true');
      }, 7000);
    }
  }, []);

  useEffect(() => {
    const hasSeenTextIntro = localStorage.getItem('hasSeenTextIntro');
    if (hasSeenTextIntro) {
      setTextIntroComplete(true);
    } else {
      setTimeout(() => {
        setTextIntroComplete(true);
        localStorage.setItem('hasSeenTextIntro', 'true');
      }, 45000);
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
                {introComplete && textIntroComplete ? (
                  <>
                    <LandPage />
                    {/* <TextIntro /> */}
                    <AboutPage />
                    <Career />
                    <SkillsPage />
                    <ProjectPage />
                    <Contact />
                    <Footer />
                  </>
                ) : (
                  <>
                    {introComplete && <TextIntro />}
                    {!introComplete && <Intro />}
                  </>
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
