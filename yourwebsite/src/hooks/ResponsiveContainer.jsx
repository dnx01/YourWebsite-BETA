// src/components/ResponsiveContainer.jsx
import React from 'react';
import { useResponsiveStyle } from '../hooks/useResponsiveStyle';

const ResponsiveContainer = ({ breakpoints, children }) => {
  const breakpointIndex = useResponsiveStyle(breakpoints);

  return (
    <div className={`responsive-container breakpoint-${breakpointIndex}`}>
      {children[breakpointIndex] || children[0]} {/* Afișăm conținutul pentru breakpoint */}
    </div>
  );
};

export default ResponsiveContainer;
