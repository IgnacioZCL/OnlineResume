
import Sidebar from './components/Sidebar/Sidebar'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LanguageSelector from './components/LanguageSelector/LanguageSelector';
import { Container } from 'react-bootstrap'
import AboutMe from './components/AboutMe/AboutMe';
import JobExperience from './components/JobExperience/JobExperience';
import Education from './components/Education/Education';
import NameTitle from './components/NameTitle/NameTitle';

function App() {
  return (
    <>
      <Router>
        <LanguageSelector/>
        <div className="d-flex">
          <Sidebar />
          <Container>
            <div className="name-title">
              <NameTitle />
            </div>
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/job_experience" element={<JobExperience />} />
              <Route path="/education" element={<Education />} />
            </Routes>
          </Container>
        </div>
      </Router></>
  );
}

export default App;
