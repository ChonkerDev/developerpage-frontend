import { Link, Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

export default function Projects() {
  const location = useLocation();
  return (
    <div>
      <h1 style={{ textAlign: 'center', fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
        Projects
      </h1>
      <nav style={{ display: 'flex', gap: 20, justifyContent: 'center', padding: 20 }}>
        <Link to="projectoverview" style={linkStyle}>Overview</Link>
        <Link to="projectsynthrace" style={linkStyle}>Synth Race</Link>
        <Link to="projectprojectlilith" style={linkStyle}>Project Lilith</Link>
      </nav>
      <div style={{ padding: 20, overflowX: 'hidden' }}>
        <Outlet />
      </div>
    </div>
  );
}

const linkStyle = {
  fontSize: '1.5rem',
  padding: '10px 20px',
  fontWeight: 'bold',
  textDecoration: 'none', // Optional: remove underline
  color: 'white',         // Optional: adjust to your color theme
};
