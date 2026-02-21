import { useRef } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";
import { Container } from "react-bootstrap";
import AboutMe from "./components/AboutMe/AboutMe";
import JobExperience from "./components/JobExperience/JobExperience";
import Education from "./components/Education/Education";
import NameTitle from "./components/NameTitle/NameTitle";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const RouteTransitions = () => {
  let location = useLocation();
  const nodeRef = useRef(null);
  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={location.pathname}
        timeout={400}
        classNames="fade"
        nodeRef={nodeRef}
      >
        <div className="page-container">
          <div ref={nodeRef} className="route-wrapper">
            <Routes location={location}>
              <Route path="/OnlineResume/" element={<AboutMe />} />
              <Route
                path="/OnlineResume/job_experience"
                element={<JobExperience />}
              />
              <Route path="/OnlineResume/education" element={<Education />} />
            </Routes>
          </div>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

function App() {
  return (
    <>
      <Router>
        <LanguageSelector />
        <div className="d-flex">
          <Sidebar />
          <Container>
            <div className="name-title">
              <NameTitle />
            </div>
            <RouteTransitions />
            {/* <div className="text-center bottom-0">
              Made with ♥ by José Figueroa
            </div> */}
          </Container>
        </div>
      </Router>
    </>
  );
}

export default App;
