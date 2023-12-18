import LandPage from "./components/LandingPage/LandPage";
import AboutPage from "./components/AboutPage/AboutPage";
import SkillsPage from "./components/SkillsPage/SkillsPage";
import ProjectPage from "./components/ProjectPage/ProjectPage";
import Career from "./components/Career/Career";
function App() {
  return (
    <div className="App">
      <>
        <LandPage/>
        <AboutPage/>
        <Career/>
        <SkillsPage/>
        <ProjectPage/>
      </>
    </div>
  );
}

export default App;
