import React from 'react';
import TopBar from './components/TopBar';

function App() {
  return (
    
    <div style={{ padding: 20, color: 'white', backgroundColor: '#1A1B1E', minHeight: '100vh' }}>
      <TopBar />
      <h1>Hello, Mantine + React!</h1>
      <p>This is your barebones app.</p>
      <video
        controls
        preload="metadata"
        width="640"
        height="360"
        src="http://localhost:5140/api/VideoFetch/projectlilithsample1"
      >
        Your browser does not support the video tag.
      </video>
    </div>

  );
}

export default App;