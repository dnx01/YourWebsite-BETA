// src/hooks/useResponsiveStyle.js
import { useState, useEffect } from "react";

export const useResponsiveStyle = (breakpoints) => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const breakpointIndex = breakpoints.findIndex((bp) => windowWidth <= bp);
      setCurrentBreakpoint(breakpointIndex === -1 ? breakpoints.length : breakpointIndex);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Rulează la montare componentă pentru a seta inițial breakpoint-ul

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoints]);

  return currentBreakpoint;
};
