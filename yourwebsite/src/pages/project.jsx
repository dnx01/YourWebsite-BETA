import React from 'react';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ProjectPage = () => {
    return (
        <ResponsiveContainer breakpoints={[600, 900, 1200]}>
            {[
                <div key="mobile">
                    <h2>Project - Mobile View 📱</h2>
                    <p>This is the project content for mobile view.</p>
                </div>,
                <div key="tablet">
                    <h2>Project - Tablet View 🍫</h2>
                    <p>This is the project content for tablet view.</p>
                </div>,
                <div key="desktop">
                    <h2>Project - Desktop View 💻</h2>
                    <p>This is the project content for desktop view.</p>
                </div>,
                <div key="largeDesktop">
                    <h2>Project - Large Desktop View 🖥️</h2>
                    <p>This is the project content for large desktop view.</p>
                </div>,
            ]}
        </ResponsiveContainer>
    );
};

export default ProjectPage;
