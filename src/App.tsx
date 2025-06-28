import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TopBar from './components/TopBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import WorkHistory from './pages/WorkHistory';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact'
import ProjectProjectLilith from './pages/Projects/ProjectProjectLilith';
import ProjectSynthRace from './pages/Projects/ProjectSynthRace';

function App() {
  return (

    <div style={{ padding: 20, color: 'white', backgroundColor: '#1A1B1E', minHeight: '100vh' }}>
      <TopBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} /> {/* auto route to home when entering site initially */}
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />}>
          <Route index element={<Navigate to="projectsynthrace" replace />} />
          <Route path="projectprojectlilith" element={<ProjectProjectLilith />} />
          <Route path="projectsynthrace" element={<ProjectSynthRace />} />
        </Route>
        <Route path="/resume" element={<Resume />} />
        <Route path="/workhistory" element={<WorkHistory />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>

  );
}

export default App;