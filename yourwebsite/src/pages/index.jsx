import React from 'react';
import ResponsiveContainer from '../components/ResponsiveContainer';
import Header from '../components/Header';

const IndexPage = () => {
    return (
        <ResponsiveContainer breakpoints={[600, 900, 1200]}>
            {[
                <div key="mobile">
                    <Header />
                    <h2>Mobile View 📱</h2>
                    <p>Aici este conținutul pentru vizualizarea mobilă.</p>
                </div>,
                <div key="tablet">
                    <Header />
                    <h2>Tablet View 🍫</h2>
                    <p>Aici este conținutul pentru vizualizarea pe tabletă.</p>
                </div>,
                <div key="desktop">
                    <Header />
                    <h2>Desktop View 💻</h2>
                    <p>Aici este conținutul pentru vizualizarea desktop.</p>
                </div>,
                <div key="largeDesktop">
                    <Header />
                    <h2>Large Desktop View 🖥️</h2>
                    <p>Aici este conținutul pentru vizualizarea desktop mare.</p>
                </div>,
            ]}
        </ResponsiveContainer>
    );
};

export default IndexPage;
