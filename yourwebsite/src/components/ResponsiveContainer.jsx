import React from 'react';
import PropTypes from 'prop-types';
import { useResponsiveJSX } from '../hooks/useResponsiveJSX';

const ResponsiveContainer = ({ breakpoints, children }) => {
  const breakpointIndex = useResponsiveJSX(breakpoints);

  return (
    <div>
      {children[breakpointIndex] || null}
    </div>
  );
};

// Validate the props passed to the component
ResponsiveContainer.propTypes = {
  breakpoints: PropTypes.arrayOf(PropTypes.number).isRequired,
  children: PropTypes.node,
};

export default ResponsiveContainer;
