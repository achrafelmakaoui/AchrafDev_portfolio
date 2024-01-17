import LandPage from "./components/LandingPage/LandPage";
import AboutPage from "./components/AboutPage/AboutPage";
import SkillsPage from "./components/SkillsPage/SkillsPage";
import ProjectPage from "./components/ProjectPage/ProjectPage";
import Career from "./components/Career/Career";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/Notfound404/NotFound";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <>
        <Routes>
            <Route path="/" element={<><LandPage/><AboutPage/><Career/><SkillsPage/><ProjectPage/><Contact/><Footer/></>}/>
            <Route path="/*" element={<><NotFound/></>}/>
        </Routes>
      </>
    </div>
  );
}

export default App;
