// src/pages/Introducere.jsx
import React from 'react';
import ResponsiveContainer from '../components/ResponsiveContainer';

const IntroducerePage = () => {
  return (
    <ResponsiveContainer breakpoints={[600, 900, 1200]}>
      {[
        <div key="mobile">
          <h2>Mobile View 📱</h2>
          <p>Aici este conținutul pentru vizualizarea mobilă.</p>
        </div>,
        <div key="tablet">
          <h2>Tablet View 🍫</h2>
          <p>Aici este conținutul pentru vizualizarea pe tabletă.</p>
        </div>,
        <div key="desktop">
          <h2>Desktop View 💻</h2>
          <p>Aici este conținutul pentru vizualizarea pe desktop.</p>
        </div>,
        <div key="largeDesktop">
          <h2>Large Desktop View 🖥️</h2>
          <p>Aici este conținutul pentru vizualizarea pe desktop mare.</p>
        </div>,
      ]}
    </ResponsiveContainer>
  );
};

export default IntroducerePage;
