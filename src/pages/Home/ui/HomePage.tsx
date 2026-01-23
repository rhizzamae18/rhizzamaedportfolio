import React from 'react';
import { Header } from '@/widgets/Header';
import { Expertise } from '@/widgets/Expertise';
import { Projects } from '@/widgets/Projects';
import { Certifications } from '@/widgets/Certifications';
import { Experience } from '@/widgets/Experience';
import { Footer } from '@/widgets/Footer';

const HomePage = () => {
    return (
        <div className="app-container" style={{ paddingBottom: '0' }}>
            <Header />

            {/* Row 1: Experience (Left) & Projects (Right) */}
            <div className="responsive-grid wide-left">
                <div style={{ border: '2px solid black', padding: '1rem' }}>
                    <Experience />
                </div>
                <div style={{ border: '2px solid black', padding: '1rem' }}>
                    <Projects />
                </div>
            </div>

            {/* Row 2: Expertise & Certifications */}
            <div className="responsive-grid">
                <div style={{ border: '2px solid black', padding: '1rem' }}>
                    <Expertise />
                </div>
                <div style={{ border: '2px solid black', padding: '1rem' }}>
                    <Certifications />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default HomePage;
