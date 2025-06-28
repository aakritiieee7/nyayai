import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AIResponse from './pages/AIResponse';
import GenerateDraft from './pages/GenerateDraft';
import ConnectHelp from './pages/ConnectHelp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai-response" element={<AIResponse />} />
        <Route path="/generate-draft" element={<GenerateDraft />} />
        <Route path="/connect-help" element={<ConnectHelp />} />
      </Routes>
    </Router>
  );
}

export default App;