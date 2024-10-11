import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexPage from './pages/index';
import IntroducerePage from './pages/introducere';
import ProjectPage from './pages/project';
import './styles/main.css';
import './styles/base.css'; // Include stilurile de bază responsive

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/introducere" element={<IntroducerePage />} />
                <Route path="/project" element={<ProjectPage />} />
            </Routes>
        </Router>
    );
}

export default App;
